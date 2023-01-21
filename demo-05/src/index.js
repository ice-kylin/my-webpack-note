// 直接将 CSS 引入到 JS 中
import "./style/index.css";
// 引入图片
import webpackLogo from "./assets/img/webpack.svg";

document.body.insertAdjacentHTML("beforeend", "<h1>Hello World!</h1>");
document.body.insertAdjacentHTML("beforeend", `<img src="${webpackLogo}"  alt="webpack"/>`);
document.addEventListener("click", () => {
    console.log("Hello");
});
