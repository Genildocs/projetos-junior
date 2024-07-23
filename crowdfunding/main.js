import "./style.css";
import Logo from "/assets/images/logo.svg";
import iconBookmark from "./assets/images/icon-bookmark.svg";
import logoMastercraft from "./assets/images/logo-mastercraft.svg";
import { addListHtml } from "./modules/addListHtml.js";

document.querySelector("#app").innerHTML = `
  <header class="flex items-center justify-between h-[10vh] px-3 relative lg:px-12 ">
    <img src=${Logo} alt="Logotipo" class="z-50" />
    <div id="list-menu" class="z-50"></div>
    <div id="overlay" class="hidden"></div>
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
        <div class="flex items-center  mt-5 sm:justify-between">
          <button class="bg-moderate-cyan py-3 px-8 rounded-3xl text-white mr-3 hover:bg-dark-cyan ">Back this project</button>
          <button class="sm:flex items-center gap-5">
            <img src=${iconBookmark} alt="icon bookmark" />
            <p class="font-semibold text-gray-500 hidden sm:block">Bookmark</p>
          </button>
        </div>
    </div>
  </main>
`;

addListHtml();
