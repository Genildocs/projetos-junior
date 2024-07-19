import "./style.css";
import Logo from "/assets/images/logo.svg";
import { addListHtml } from "./modules/addListHtml.js";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  <header class="flex items-center justify-between h-[10vh] px-3 relative lg:px-12">
    <img src=${Logo} alt="Logotipo" />
    <div id="list-menu"></div>
  </header>
`;

  addListHtml();
});
