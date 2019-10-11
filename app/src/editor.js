const axios = require("axios");
const DOMHelper = require("./dom-helper");
require("./iframe-load");

module.exports = class Editor {
    constructor() {
        this.iframe = document.querySelector("iframe");
    }

    open(page) {
        this.currentPage = page;

        axios
            .get("../" + page)
            .then((res) => DOMHelper.parseStrToDom(res.data))
            .then(DOMHelper.wrapTextNodes)
            .then((dom) => {
                DOMHelper.virtualDom = dom;
                return dom;
            })
            .then(DOMHelper.serializeDomToStr)
            .then((html) => axios.post("./api/saveTempPage.php", { html }))
            .then(() => this.iframe.load("../temp.html"))
            .then(() => this.enableEditing())
    }

    enableEditing() {
        this.iframe.contentDocument.body.querySelectorAll("text-editor").forEach((element) => {
            element.contentEditable = "true";
            element.addEventListener("input", () => {
                this.onTextEdit(element);
            })
        })
    }
    
    onTextEdit(element) {
        const id = element.getAttribute("nodeid");
        this.virtualDom.body.querySelector(`[nodeid = ${id}]`).innerHTML = element.innerHTML;
    }

    save() {
        const newDom = this.virtualDom.cloneNode(dom);
        this.unwrapTextNodes(newDom);
        const html = this.serializeDomToStr(newDom);
        axios.post("./api/savePage.php", { pageName: this.currentPage, html })

     }
}