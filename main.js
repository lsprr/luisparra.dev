import "./style.scss";

import Introduction from "./src/sections/Introduction";
import AfterHours from "./src/sections/AfterHours";
import Acknowledgments from "./src/sections/Acknowledgments";

import Footer from "./src/layouts/Footer";

const sections = [
    Introduction(),
    AfterHours(),
    Acknowledgments(),
];

const mainContent = document.querySelector("#main-content");
mainContent.innerHTML = sections.join("");

const footerContent = document.querySelector("#footer");
footerContent.innerHTML = Footer();


