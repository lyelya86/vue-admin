require("./iframe-load");

module.exports = class Editor {
    constructor() {
        this.iframe = document.querySelector("iframe");
    }

    open(page) {
        this.iframe.load("../" + page, () => {
            const body = this.iframe.contentDocument.body;
            let textNodes =[];

            function recursy(element) {
                element.childNodes.forEach((node) => {
                    if(node.nodeName === "#text" && node.nodeValue.replace(/\s+/g, "").length > 0) {
                        textNodes.push(node);
                    } else {
                        recursy(node);
                    }
                });
            }

            recursy(body);
            
            textNodes.forEach((node) => {
                const wrapper = this.iframe.contentDocument.createElement("text-editor");
                node.parentNode.replaceChild(wrapper, node);
                wrapper.appendChild(node);
                wrapper.contentEditable = "true";
            });
        })
    }
}