const Editor = require("./editor");
window.editor = new Editor();
window.onload = () => {
    window.editor.open("index.html");
}


// const $ = require("jquery");

// function getPagesList() {
//     $("h1").remove();
//     $.get("./api", (data) => {
//         data.forEach((file) => {
//             $("body").append("<h1>" + file + "</h1>");
//         });
//     }, "JSON");
// }
// getPagesList() ;

// $("button").click(() => {
//     $.post("./api/createNewHtmlPage.php", {
//         "name": $("input").val()
//     }, (data) => {
//         getPagesList();
//     })
//     .fail(() => {
//         alert("такая страница уже существует");
//     })
// })



// const Vue = require('../../node_modules/vue/dist/vue.js');
// const axios = require("../../node_modules/axios/dist/axios.js");

// new Vue ({
//     el: "#app",
//     data: {
//         "pageList": [],
//         "newPageName": ""
//     },
//     methods: {
//         createPage() {
//             axios
//                 .post("./api/createNewHtmlPage.php", { "name": this.newPageName })
//                 .then(() => this.updatePageList())
//         },
//         updatePageList() {
//             axios
//                 .get("./api/")
//                 .then((response) => {
//                     this.pageList = response.data
//                     console.log(response.data)
//                     console.log(this.pageList)
//             })
//         },
//         deletePage(page) {
//             axios
//                 .post("./api/deletePage.php", { "name": page })
//                 .then(() => this.updatePageList())
//         }
//     },
//     created() {
//         this.updatePageList();
//     }
// })



