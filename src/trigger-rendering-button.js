import {Subject} from "rxjs";

// to test event emission
const triggerRendering = new Subject();
const triggerSelectChange = new Subject();

export class RenderTrigger extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});

        const triggerTemplate = document.createElement("template");
        triggerTemplate.innerHTML = '<button id="trigger">Trigger rendering</button><button id="select15min">Select 15 mins</button>'
        this._shadowRoot.appendChild(triggerTemplate.content.cloneNode(true));
        this._shadowRoot.querySelector('#trigger').addEventListener('click', this.triggerRendering);
        this._shadowRoot.querySelector('#select15min').addEventListener('click', this.triggerSelectChange);
    }

    triggerRendering() {
        triggerRendering.next();
    }

    triggerSelectChange() {
        triggerSelectChange.next();
    }
}
