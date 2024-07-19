import "./style.css";
import Logo from "/assets/images/logo.svg";
import logoMastercraft from './assets/images/logo-mastercraft.svg'
import { addListHtml } from "./modules/addListHtml.js";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  <header class="flex items-center justify-between h-[10vh] px-3 relative lg:px-12">
    <img src=${Logo} alt="Logotipo" />
    <div id="list-menu"></div>
  </header>

  <main id="main" class="md:flex justify-center">
    <div id="content" class="bg-white mx-3 mt-[10rem] rounded-md p-5 md:w-[600px] ">
        <div class="flex justify-center">
            <img src=${logoMastercraft} alt="logo mastercraft" />
        </div>
        <h1 class="text-3xl font-bold mb-5">Get Started</h1>
    </div>
  </main>
`;

  addListHtml();
});
