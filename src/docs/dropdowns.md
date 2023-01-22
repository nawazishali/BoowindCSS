# Dropdowns

## Single Button

<code-preview>
  <template>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid rounded cursor-pointer pointer-events-none hover:bg-gray-700 active:bg-gray-700">
          Dropdown button <span class="text-xs">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
  </template>
</code-preview>

## Color variants

<code-preview>
  <template>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer pointer-events-none hover:bg-blue-700 active:bg-blue-700">
          Primary <span class="text-xs">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid rounded cursor-pointer pointer-events-none hover:bg-gray-700 active:bg-gray-700">
          Secondary
          <span class="text-xs">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-white align-middle bg-green-500 border-transparent border-solid rounded cursor-pointer pointer-events-none hover:bg-green-600 active:bg-green-600">
          Success <span class="text-xs">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-white align-middle bg-red-600 border-transparent border-solid rounded cursor-pointer pointer-events-none hover:bg-red-700 active:bg-red-700">
          Danger <span class="text-xs">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center align-middle bg-yellow-500 border-transparent border-solid rounded cursor-pointer pointer-events-none text-dark hover:bg-yellow-600 active:bg-yellow-600">
          Warning <span class="text-xs">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-white align-middle bg-teal-500 border-transparent border-solid rounded cursor-pointer pointer-events-none hover:bg-teal-600 active:bg-teal-600">
          Info <span class="text-xs">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center align-middle bg-gray-200 border-transparent border-solid rounded cursor-pointer pointer-events-none text-dark hover:bg-gray-300 active:bg-gray-300">
          Light <span class="text-xs">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-3 py-2 m-1 text-base font-normal leading-6 text-center text-white align-middle bg-gray-800 border-transparent border-solid rounded cursor-pointer pointer-events-none hover:bg-gray-900 active:bg-gray-900">
          Dark <span class="text-xs">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
  </template>
</code-preview>

## Split button

<code-preview>
  <template>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <div role="group" class="inline-flex overflow-hidden rounded">
          <button
            type="button"
            class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700">
            Secondary
          </button>
          <button
            type="button"
            class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer pointer-events-none hover:bg-gray-700 active:bg-gray-700">
            <span class="text-xs">&#9660;</span>
          </button>
        </div>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
  </template>
</code-preview>

<!-- ## Sizes

<code-preview>
  <template>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <button
          type="button"
          class="inline-block px-4 py-2 m-1 text-xl font-normal leading-8 text-center text-white align-middle bg-gray-600 border-transparent border-solid rounded cursor-pointer pointer-events-none hover:bg-gray-700 active:bg-gray-700">
          Large button <span class="text-xl">&#9660;</span>
        </button>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
    <details class="inline-block dropdown">
      <summary class="list-none">
        <div role="group" class="inline-flex overflow-hidden rounded">
          <button
            type="button"
            class="inline-block px-4 py-2 text-xl font-normal leading-8 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700">
            Large Split button
          </button>
          <button
            type="button"
            class="inline-block px-4 py-2 text-xl font-normal leading-8 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer pointer-events-none hover:bg-gray-700 active:bg-gray-700">
            <span class="text-xl">&#9660;</span>
          </button>
        </div>
      </summary>
      <div class="absolute w-auto py-2 ml-1 text-left bg-white border border-gray-400 rounded">
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Another action</a>
        <a tabindex="0" class="block px-4 py-2 text-base font-normal leading-6 text-gray-800 no-underline align-middle cursor-pointer hover:bg-gray-300" href="#">Something else here</a>
      </div>
    </details>
  </template>
</code-preview> -->

<!-- Note: pointer-events-none on buttons is needed to pass the events up to summary tag -->