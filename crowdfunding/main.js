import './style.css';
import Logo from '/assets/images/logo.svg';
import iconBookmark from './assets/images/icon-bookmark.svg';
import logoMastercraft from './assets/images/logo-mastercraft.svg';
import closeModal from './assets/images/close-fill.svg'
import {addListHtml, cardsPlan, modal} from "./modules/index.js";

document.querySelector('#app').innerHTML = `
  <header class="flex items-center justify-between h-[10vh] px-3 relative lg:px-12 ">
    <img src=${Logo} alt="Logotipo" class="z-50" />
    <div id="list-menu" class="z-50"></div>
    <div id="overlay" ></div>
  </header>
	
<div class="md:flex  justify-center"> 	
  <main id="main" class=" bg-white mx-3 mt-[10rem] rounded-md p-5 md:w-[600px] relative">
      <div id="modal" class="p-5 rounded-md bg-white">
                <div class="mb-5"> 
                    <div class="flex justify-between items-center mb-3"> 
                        <h3 class="text-lg font-bold">Back this project</h3>
                        <button id="closeModal">
                            <img src=${closeModal} alt="icon close" class="h-6 w-6">
                        </button>
                    </div>  
                    <p class="text-gray-500">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                </div>    	    
       </div>
    <section id="content" >
        <div class="flex justify-center translate-y-[-50px]">
            <img src=${logoMastercraft} alt="logo mastercraft" />
        </div>
        <div>
          <h1 class="text-2xl font-bold mb-5 text-center">Mastercraft Bamboo Monitor Riser</h1>
          <p class="text-center text-gray-500">A beautiful handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <div class="flex items-center  mt-5 sm:justify-between">
          <button id="btnProject" class="bg-moderate-cyan py-3 px-8 rounded-3xl text-white mr-3 hover:bg-dark-cyan ">Back this project</button>
          <button class="sm:flex items-center gap-5">
            <img src=${iconBookmark} alt="icon bookmark" />
            <p class="font-semibold text-gray-500 hidden sm:block">Bookmark</p>
          </button>
        </div>
        <div id="numbers" class="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-10">
        	<div class="mb-6 sm:mb-0"> 
        		<p><span class="font-bold text-2xl block text-center sm:text-start">$89,914</span> of $100,000 backed</p>
        	</div>
        	<div class="mb-6 sm:mb-0"> 
        		<p><span class="font-bold text-2xl block text-center sm:text-start">5,007</span> total backers</p>
        	</div>
        	<div> 
        		<p><span class="font-bold text-2xl block text-center sm:text-start">56</span> days left</p>
        	</div>
		</div>
    </section>
    <section id="section-cards" class="mt-10 "> 
    	<div> 
    		<h2 class="text-lg font-bold mb-3">About this project</h2>
    		<p class="text-gray-500">The Mastercraft  monitor riser is a sturdy and spacious platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. 
    		 	<span class="block mt-2">Featuring artisan craftmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</span>
    		</p>
    	</div>
    	<div id="cards" class="mt-5 "></div>
    	
    </section>
  </main>
  </div>
`;

addListHtml();
cardsPlan()
modal()