# Navbar

<p class="m-0 text-2xl font-light"></p>

## Base navbar

<code-preview>
  <template>
    <nav class="flex flex-col items-center justify-between px-3 py-3 bg-gray-100 md:py-1 md:flex-row">
      <div class="flex items-center justify-between w-full h-full md:w-auto md:mr-6">
        <a href="#!" class="w-auto text-xl text-current no-underline whitespace-no-wrap">
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
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-100 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-50 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
              Link
            </a>
          </li>
          <li>
            <details class="inline-block dropdown">
              <summary
                class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-50 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
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
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-25 cursor-not-allowed pointer-events-none md:px-3 hover:gray-gray-700 hover:opacity-75 active:opacity-100">
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
  </template>
</code-preview>

## Navbar Logo

<code-preview>
  <template>
    <nav class="flex flex-col items-center justify-between px-3 py-3 bg-gray-100 md:py-1 md:flex-row">
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
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-100 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
              Home
            </a>
          </li>
          <li>
            <details class="inline-block dropdown">
              <summary
                class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-50 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
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
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-25 cursor-not-allowed pointer-events-none md:px-3 hover:gray-gray-700 hover:opacity-75 active:opacity-100">
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
  </template>
</code-preview>

## Navbar without list

<code-preview>
  <template>
    <nav class="flex flex-col items-center justify-between px-3 py-3 bg-gray-100 md:flex-row md:py-1">
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
        <div class="flex flex-col flex-wrap justify-between w-full md:flex-row md:w-auto">
            <a
              href="#"
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-100 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
              Home
            </a>
            <details class="inline-block dropdown">
              <summary
                class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-50 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
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
            <a
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-25 cursor-not-allowed pointer-events-none md:px-3 hover:opacity-75 active:opacity-100">
              Disabled
            </a>
        </div>
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
  </template>
</code-preview>

## Navbar colors

<code-preview>
  <template>
    <nav class="flex flex-col items-center justify-between px-3 py-3 text-white bg-blue-600 md:flex-row md:py-1">
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
        <div class="flex flex-col flex-wrap justify-between w-full md:flex-row md:w-auto">
            <a
              href="#"
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
              Home
            </a>
            <details class="inline-block dropdown">
              <summary
                class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-50 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
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
            <a
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-25 cursor-not-allowed pointer-events-none md:px-3 hover:opacity-75 active:opacity-100">
              Disabled
            </a>
        </div>
        <form class="w-full md:w-auto">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" />
          <button
            type="button"
            class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-gray-200 align-middle transition-colors duration-200 border border-gray-200 border-solid rounded cursor-pointer hover:text-black hover:bg-gray-200 active:text-black active:bg-gray-200">
            Search
          </button>
        </form>
      </div>
    </nav>
  </template>
</code-preview>

<code-preview>
  <template>
    <nav class="flex flex-col items-center justify-between px-3 py-3 text-white bg-gray-800 md:flex-row md:py-1">
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
        <div class="flex flex-col flex-wrap justify-between w-full md:flex-row md:w-auto">
            <a
              href="#"
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
              Home
            </a>
            <details class="inline-block dropdown">
              <summary
                class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-50 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
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
            <a
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-25 cursor-not-allowed pointer-events-none md:px-3 hover:opacity-75 active:opacity-100">
              Disabled
            </a>
        </div>
        <form class="w-full md:w-auto">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" />
          <button
            type="button"
            class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-gray-200 align-middle transition-colors duration-200 border border-gray-200 border-solid rounded cursor-pointer hover:text-black hover:bg-gray-200 active:text-black active:bg-gray-200">
            Search
          </button>
        </form>
      </div>
    </nav>
  </template>
</code-preview>

<code-preview>
  <template>
    <nav class="flex flex-col items-center justify-between px-3 py-3 text-white bg-teal-500 md:flex-row md:py-1">
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
        <div class="flex flex-col flex-wrap justify-between w-full md:flex-row md:w-auto">
            <a
              href="#"
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
              Home
            </a>
            <details class="inline-block dropdown">
              <summary
                class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-50 cursor-pointer md:px-3 hover:opacity-75 active:opacity-100">
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
            <a
              class="inline-block py-3 text-base font-normal leading-6 text-current no-underline align-middle border-transparent border-solid rounded opacity-25 cursor-not-allowed pointer-events-none md:px-3 hover:opacity-75 active:opacity-100">
              Disabled
            </a>
        </div>
        <form class="w-full md:w-auto">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" />
          <button
            type="button"
            class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-gray-200 align-middle transition-colors duration-200 border border-gray-200 border-solid rounded cursor-pointer hover:text-black hover:bg-gray-200 active:text-black active:bg-gray-200">
            Search
          </button>
        </form>
      </div>
    </nav>
  </template>
</code-preview>

