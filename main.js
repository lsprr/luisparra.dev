import { initAll } from "govuk-frontend";
import "./style.scss";

import Header from "./src/components/Header";
import Hero from "./src/sections/Hero";
import About from "./src/sections/About";
import AfterHours from "./src/sections/AfterHours";
import FAQ from "./src/sections/FAQ";
import Acknowledgments from "./src/sections/Acknowledgments";
import Footer from "./src/components/Footer";

const sections = [Hero(), About(), AfterHours(), FAQ(), Acknowledgments()];

const headerContent = document.querySelector("#govuk-header");
headerContent.innerHTML = Header();

const mainContent = document.querySelector("#main-content");
mainContent.innerHTML = sections.join("");

const footerContent = document.querySelector("#govuk-footer");
footerContent.innerHTML = Footer();

initAll();
