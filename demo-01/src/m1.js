import $ from "jquery";

export default {
    setH1() {
        // document.body.insertAdjacentHTML("afterbegin", "<h1>Hello, Webpack!</h1>");
        $("body").append("<h1>Hello, Webpack!</h1>");
    },
};
