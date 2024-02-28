import "./src/scss/main.scss";

import Header from './src/layouts/Header';
import Footer from "./src/layouts/Footer";

import About from "./src/sections/About";
import Work from "./src/sections/Work";
import Technologies from './src/sections/Technologies';
import AfterHours from "./src/sections/AfterHours";
import Acknowledgments from "./src/sections/Acknowledgments";

const sections = [
    About(),
    Work(),
    Technologies(),
    AfterHours(),
    Acknowledgments(),
];

const headerContent = document.querySelector("#header");
headerContent.innerHTML = Header();

const mainContent = document.querySelector("#main-content");
mainContent.innerHTML = sections.join("");

const footerContent = document.querySelector("#footer");
footerContent.innerHTML = Footer();


