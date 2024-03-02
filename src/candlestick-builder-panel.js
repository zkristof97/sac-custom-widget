const builderTemplate = document.createElement('template');
builderTemplate.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Candlesticks chart Properties</legend>
				<table>
					<tr>
						<td>Opacity</td>
						<td><input id="builder_opacity" type="text" size="5" maxlength="5"></td>
					</tr>
				</table>
				<input type="submit">
			</fieldset>
		</form>
		<style>
		:host {
			display: block;
			padding: 1em 1em 1em 1em;
		}
		</style>
	`;

export class CandlestickBuilderPanel extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(builderTemplate.content.cloneNode(true));
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
            opacity: this.opacity,
          },
        },
      }),
    );
  }

  set opacity(newOpacity) {
    this._shadowRoot.getElementById('builder_opacity').value = newOpacity;
  }

  get opacity() {
    return this._shadowRoot.getElementById('builder_opacity').value;
  }
}
