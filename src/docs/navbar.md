# Navbar

## Base navbar

<code-preview>
    <nav class="flex flex-row items-center justify-between px-3 py-3 bg-gray-100 md:py-1 md:flex-row">
      <div class="flex items-center justify-between w-full h-full md:w-auto md:mr-6">
        <a href="#!" class="text-xl text-current no-underline">Navbar</a>
        <button type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="md:hidden">
          <i class="fa-solid fa-xl fa-bars"></i>
        </button>
      </div>
      <div class="flex-col flex-wrap items-center justify-between hidden w-full md:flex-row md:flex md:text-center">
        <ul class="flex flex-col flex-wrap justify-between w-full md:flex-row md:w-auto">
          <li>
            <a
              href="#"
              class="inline-block py-3 text-base font-normal leading-6 text-gray-900 no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-3 active:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-block py-3 text-base font-normal leading-6 text-gray-600 no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-3 hover:text-gray-700 active:text-gray-900">
              Link
            </a>
          </li>
          <li>
            <details class="inline-block dropdown">
              <summary
                class="inline-block py-3 text-base font-normal leading-6 text-gray-600 no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-3 hover:text-gray-700 active:text-gray-900">
                Dropdown button
                <i class="fa-solid fa-caret-down"></i>
              </summary>
              <div class="absolute z-20 w-auto py-2 text-left bg-white border border-gray-400 rounded">
                <a
                  tabindex="0"
                  href="#"
                  class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300">
                  Action
                </a>
                <a
                  tabindex="0"
                  href="#"
                  class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300">
                  Another action
                </a>
                <hr />
                <a
                  tabindex="0"
                  href="#"
                  class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300">
                  Something else here
                </a>
              </div>
            </details>
          </li>
          <li>
            <a
              class="inline-block py-3 text-base font-normal leading-6 text-gray-400 no-underline align-middle border-transparent border-solid rounded cursor-not-allowed pointer-events-none md:px-3 hover:gray-gray-700 active:text-gray-900">
              Disabled
            </a>
          </li>
        </ul>
        <form class="w-full md:w-auto">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" />
          <button
            type="button"
            class="inline-block px-3 py-2 my-1 text-base font-normal leading-6 text-center text-green-500 align-middle transition-colors duration-200 border border-green-500 border-solid rounded cursor-pointer hover:text-white hover:bg-green-500 active:text-white active:bg-green-500">
            Search
          </button>
        </form>
      </div>
    </nav>
</code-preview>

## Navbar Logo

<code-preview>
    <nav class="flex flex-row items-center justify-between px-3 py-3 bg-gray-100 md:py-1 md:flex-row">
      <div class="flex items-center justify-between w-full h-full md:w-auto md:mr-6">
        <a href="#!" class="w-auto text-xl text-current no-underline whitespace-no-wrap">
          <img src="/boowindcss.svg" alt="boowindcss" class="inline-block w-8 mr-1" />
          Navbar
        </a>
        <button type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="md:hidden">
          <i class="fa-solid fa-xl fa-bars"></i>
        </button>
      </div>
      <div class="flex-col flex-wrap items-center justify-between hidden w-full md:flex-row md:flex md:text-center">
        <ul class="flex flex-col flex-wrap justify-between w-full md:flex-row md:w-auto">
          <li>
            <a
              href="#"
              class="inline-block py-3 text-base font-normal leading-6 text-gray-900 no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-3 active:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <details class="inline-block dropdown">
              <summary
                class="inline-block py-3 text-base font-normal leading-6 text-gray-600 no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-3 hover:text-gray-700 active:text-gray-900">
                Dropdown button
                <i class="fa-solid fa-caret-down"></i>
              </summary>
              <div class="absolute z-20 w-auto py-2 text-left bg-white border border-gray-400 rounded">
                <a
                  tabindex="0"
                  href="#"
                  class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300">
                  Action
                </a>
                <a
                  tabindex="0"
                  href="#"
                  class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300">
                  Another action
                </a>
                <hr />
                <a
                  tabindex="0"
                  href="#"
                  class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300">
                  Something else here
                </a>
              </div>
            </details>
          </li>
          <li>
            <a
              class="inline-block py-3 text-base font-normal leading-6 text-gray-400 no-underline align-middle border-transparent border-solid rounded cursor-not-allowed pointer-events-none md:px-3 hover:gray-gray-700 active:text-gray-900">
              Disabled
            </a>
          </li>
        </ul>
        <form class="w-full md:w-auto">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" />
          <button
            type="button"
            class="inline-block px-3 py-2 my-1 text-base font-normal leading-6 text-center text-green-500 align-middle transition-colors duration-200 border border-green-500 border-solid rounded cursor-pointer hover:text-white hover:bg-green-500 active:text-white active:bg-green-500">
            Search
          </button>
        </form>
      </div>
    </nav>
</code-preview>
