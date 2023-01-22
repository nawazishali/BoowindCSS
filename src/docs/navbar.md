# Navbar

## Base nav

<code-preview>
  <template>
  <nav class="flex flex-col items-center px-3 py-3 bg-gray-100 md:py-1 md:flex-row">
  <div class="flex items-center justify-between w-full h-full md:w-auto">
    <a class="text-xl" href="#">Navbar</a>
    <button class="md:hidden" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-xl fa-bars"></i>
    </button>
  </div>


  <div class="flex-col flex-wrap items-center justify-between hidden w-full md:flex-row md:flex md:text-center">
    <ul class="flex flex-col flex-wrap justify-between w-full md:flex-row md:w-auto">
      <li>
        <a
        href="#"
        class="inline-block py-3 text-base font-normal leading-6 text-gray-900 no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-4 focus:outline-none active:text-gray-900">
        Home
      </a>
      </li>
      <li>
          <a
            href="#"
            class="inline-block py-3 text-base font-normal leading-6 text-gray-600 no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-4 hover:text-gray-700 focus:outline-none active:text-gray-900">
            Link
          </a>
      </li>
      <li>
        <details class="inline-block">
          <summary class="py-3 text-base font-normal leading-6 text-gray-600 no-underline align-middle list-none border-transparent border-solid rounded cursor-pointer md:px-4 hover:text-gray-700 focus:outline-none active:text-gray-900">Dropdown <span class="text-xs">&#9660;</span></summary>
          <div class="absolute w-auto py-2 text-left bg-white border border-gray-400 rounded">
            <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
            <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
            <hr/>
            <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
          </div>
        </details>
      </li>
      <li>
        <a
          class="inline-block py-3 text-base font-normal leading-6 text-gray-400 no-underline align-middle border-transparent border-solid rounded cursor-not-allowed pointer-events-none md:px-4 hover:gray-gray-700 focus:outline-none active:text-gray-900">
          Disabled
        </a>
      </li>
    </ul>
    <form class="w-full md:w-auto">
      <input class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" type="search" placeholder="Search" aria-label="Search">
      <button
  type="button"
  class="inline-block px-3 py-2 my-1 text-base font-normal leading-6 text-center text-green-500 align-middle transition-colors duration-200 border border-green-500 border-solid rounded cursor-pointer hover:text-white hover:bg-green-500 active:text-white active:bg-green-500 focus:outline-none">
  Search
</button>
    </form>
  </div>
</nav>
  </template>
</code-preview>