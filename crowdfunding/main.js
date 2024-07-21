import "./style.css";
import Logo from "/assets/images/logo.svg";
import iconBookmark from "./assets/images/icon-bookmark.svg";
import logoMastercraft from "./assets/images/logo-mastercraft.svg";
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
        <div>
          <h1 class="text-2xl font-bold mb-5 text-center">Mastercraft Bamboo Monitor Riser</h1>
          <p class="text-center text-gray-500">A beautiful handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <div class="flex items-center  mt-5">
          <button class="bg-moderate-cyan py-3 px-8 rounded-3xl text-white mr-3 hover:bg-dark-cyan ">Back this project</button>
          <button >
            <img src=${iconBookmark} alt="icon bookmark" />
          </button>
        </div>
    </div>
  </main>
`;

  addListHtml();
});
