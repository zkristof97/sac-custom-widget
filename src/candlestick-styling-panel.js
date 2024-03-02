const stylingTemplate = document.createElement('template');
stylingTemplate.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Candlesticks chart Properties</legend>
				<table>
					<tr>
						<td>Border-width</td>
						<td><input id="border_width" type="text" size="40" maxlength="40"></td>
					</tr>					
					<tr>
						<td>Border-style</td>
						<td><input id="border_style" type="text" size="40" maxlength="40"></td>
					</tr>					
					<tr>
						<td>Border-color</td>
						<td><input id="border_color" type="text" size="40" maxlength="40"></td>
					</tr>
				</table>
				<input type="submit">
			</fieldset>
		</form>
	`;

export class CandlestickStylingPanel extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(stylingTemplate.content.cloneNode(true));
    this._shadowRoot
      .getElementById('form')
      .addEventListener('submit', this._submit.bind(this));
  }

  _submit(e) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent('propertiesChanged', {
        detail: {
          properties: {
            borderWidth: this.borderWidth,
            borderStyle: this.borderStyle,
            borderColor: this.borderColor,
          },
        },
      }),
    );
  }

  set borderWidth(newColor) {
    this._shadowRoot.getElementById('border_width').value = newColor;
  }

  get borderWidth() {
    return this._shadowRoot.getElementById('border_width').value;
  }

  set borderStyle(newColor) {
    this._shadowRoot.getElementById('border_style').value = newColor;
  }

  get borderStyle() {
    return this._shadowRoot.getElementById('border_style').value;
  }

  set borderColor(newColor) {
    this._shadowRoot.getElementById('border_color').value = newColor;
  }

  get borderColor() {
    return this._shadowRoot.getElementById('border_color').value;
  }
}
