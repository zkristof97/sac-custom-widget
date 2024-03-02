const stylingTemplate = document.createElement("template");
stylingTemplate.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Candlesticks chart Properties</legend>
				<table>
					<tr>
						<td>Color</td>
						<td><input id="styling_color" type="text" size="40" maxlength="40"></td>
					</tr>
				</table>
				<input type="submit">
			</fieldset>
		</form>
	`;

export class CandlestickStylingPanel extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
        this._shadowRoot.appendChild(stylingTemplate.content.cloneNode(true));
        this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
    }

    _submit(e) {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    color: this.color
                }
            }
        }));
    }

    set color(newColor) {
        this._shadowRoot.getElementById("styling_color").value = newColor;
    }

    get color() {
        return this._shadowRoot.getElementById("styling_color").value;
    }
}