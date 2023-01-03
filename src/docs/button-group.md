# Button Group

## Basic example

<code-preview>
  <template>
    <div class="inline-flex overflow-hidden rounded" role="group" aria-label="Basic example">
      <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Left</button>
      <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Middle</button>
      <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Right</button>
    </div>
  </template>
</code-preview>

## Button toolbar

<code-preview>
  <template>
    <div role="toolbar" aria-label="Toolbar with button groups">
      <div class="inline-flex overflow-hidden rounded" role="group" aria-label="First group">
        <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">1</button>
        <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">2</button>
        <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">3</button>
        <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">4</button>
      </div>
      <div class="inline-flex overflow-hidden rounded" role="group" aria-label="Second group">
        <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">5</button>
        <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">6</button>
        <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">7</button>
      </div>
      <div class="inline-flex overflow-hidden rounded" role="group" aria-label="Third group">
        <button type="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">8</button>
      </div>
    </div>
  </template>
</code-preview>

## Sizing

<code-preview>
  <template>
    <div class="inline-flex overflow-hidden text-xl rounded" role="group" aria-label="Basic example">
      <button type="button" class="inline-block px-4 py-3 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Left</button>
      <button type="button" class="inline-block px-4 py-3 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Middle</button>
      <button type="button" class="inline-block px-4 py-3 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Right</button>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="inline-flex overflow-hidden text-base rounded" role="group" aria-label="Basic example">
      <button type="button" class="inline-block px-3 py-2 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Left</button>
      <button type="button" class="inline-block px-3 py-2 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Middle</button>
      <button type="button" class="inline-block px-3 py-2 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Right</button>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="inline-flex overflow-hidden text-sm rounded" role="group" aria-label="Basic example">
      <button type="button" class="inline-block px-2 py-1 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Left</button>
      <button type="button" class="inline-block px-2 py-1 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Middle</button>
      <button type="button" class="inline-block px-2 py-1 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Right</button>
    </div>
  </template>
</code-preview>

## Vertical variation

<code-preview>
  <template>
    <div class="inline-flex flex-col overflow-hidden text-base rounded" role="group" aria-label="Basic example">
      <button type="button" class="inline-block px-3 py-2 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Button</button>
      <button type="button" class="inline-block px-3 py-2 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Button</button>
      <button type="button" class="inline-block px-3 py-2 font-normal leading-6 text-center text-white align-middle bg-gray-600 border-transparent border-solid cursor-pointer hover:bg-gray-700 active:bg-gray-700 focus:outline-none">Button</button>
    </div>
  </template>
</code-preview>