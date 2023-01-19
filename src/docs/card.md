# Card

## Basic example

<code-preview>
  <template>
    <div class="flex flex-col w-full overflow-auto bg-white border border-gray-400 rounded sm:w-2/5">
      <div class="h-1/3"><img src="https://picsum.photos/500/250" alt="placeholder" class="object-cover min-w-full" /></div>
      <div class="p-4 h-2/3">
        <h5 class="mb-3 text-xl font-medium">Card With top Image</h5>
        <p class="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#!" role="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 hover:no-underline focus:outline-none active:bg-blue-700 active:no-underline">Go somewhere</a>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="flex flex-col w-full overflow-auto bg-white border border-gray-400 rounded sm:w-2/5">
      <div class="p-4 h-2/3">
        <h5 class="mb-3 text-xl font-medium">Card With bottom Image</h5>
        <p class="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#!" role="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 hover:no-underline focus:outline-none active:bg-blue-700 active:no-underline">Go somewhere</a>
      </div>
      <div class="h-1/3"><img src="https://picsum.photos/500/250" alt="placeholder" class="object-cover min-w-full" /></div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="flex flex-col w-full overflow-auto bg-white border border-gray-400 rounded sm:w-2/5 sm:flex-row">
      <div class="w-full sm:w-1/3"><img src="https://picsum.photos/640/250" alt="placeholder" class="object-cover min-h-full"/></div>
      <div class="w-full p-4 sm:w-2/3">
        <h5 class="mb-3 text-xl font-medium">Card with right Image</h5>
        <p class="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a
          href="#!"
          role="button"
          class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 hover:no-underline focus:outline-none active:bg-blue-700 active:no-underline"
          >Go somewhere</a
        >
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="flex flex-col w-full overflow-auto bg-white border border-gray-400 rounded sm:w-2/5 sm:flex-row-reverse">
      <div class="w-full sm:w-1/3"><img src="https://picsum.photos/640/250" alt="placeholder" class="object-cover min-h-full"/></div>
      <div class="w-full p-4 sm:w-2/3">
        <h5 class="mb-3 text-xl font-medium">Card with right Image</h5>
        <p class="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a
          href="#!"
          role="button"
          class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 hover:no-underline focus:outline-none active:bg-blue-700 active:no-underline"
          >Go somewhere</a
        >
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="relative w-full overflow-auto text-white bg-white border border-gray-400 rounded sm:w-2/5">
      <div class="relative z-10 p-4">
        <h5 class="mb-3 text-xl font-medium">Overlayed Card</h5>
        <p class="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a
          href="#!"
          role="button"
          class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 hover:no-underline focus:outline-none active:bg-blue-700 active:no-underline"
          >Go somewhere</a
        >
      </div>
      <img src="https://picsum.photos/640" alt="placeholder" class="absolute top-0 object-cover w-full h-full" />
    </div>
  </template>
</code-preview>

## Titles, text, and links

<code-preview>
  <template>
    <div class="w-full overflow-auto bg-white border border-gray-400 rounded sm:w-2/5">
      <div class="p-4">
        <h5 class="text-xl font-medium">Card title</h5>
        <h6 class="mb-2 text-base font-medium text-gray-700">Card subtitle</h6>
        <p class="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#!" class="inline-block py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-transparent border-solid rounded cursor-pointer hover:text-blue-700 active:text-blue-700 hover:underline active:underline focus:outline-none">Card Link</a>
        <a href="#!" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-transparent border-solid rounded cursor-pointer hover:text-blue-700 active:text-blue-700 hover:underline active:underline focus:outline-none">Another Link</a>
      </div>
    </div>
  </template>
</code-preview>

## Header and footer

<code-preview>
  <template>
    <div class="w-full overflow-auto bg-white border border-gray-400 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25 border-b border-inherit">Featured</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Special title treatment</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" role="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 hover:no-underline focus:outline-none active:bg-blue-700 active:no-underline">Go somewhere</a>
        <a href="#!" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-transparent border-solid rounded cursor-pointer hover:text-blue-700 hover:underline focus:outline-none active:text-blue-700 active:underline">Another Link</a>
      </div>
      <div class="p-4 bg-gray-300 bg-opacity-25 border-t border-inherit">2 days ago</div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto bg-white border border-gray-400 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25 border-b border-inherit">Featured</div>
      <div class="p-4">
        <blockquote>
          <p class="mb-3 text-xl font-medium">A well-known quote, contained in a blockquote element.</p>
          <footer class="text-base font-medium text-gray-700">- Someone famous in <cite title="Source Title" class="italic">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
  </template>
</code-preview>

## Text alignment

<code-preview>
  <template>
    <div class="w-full overflow-auto bg-white border border-gray-400 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25 border-b border-inherit">Featured</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Special title treatment</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" role="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 hover:no-underline focus:outline-none active:bg-blue-700 active:no-underline">Go somewhere</a>
        <a href="#!" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-transparent border-solid rounded cursor-pointer hover:text-blue-700 hover:underline focus:outline-none active:text-blue-700 active:underline">Another Link</a>
      </div>
      <div class="p-4 bg-gray-300 bg-opacity-25 border-t border-inherit">2 days ago</div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-center bg-white border border-gray-400 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25 border-b border-inherit">Featured</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Special title treatment</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" role="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 hover:no-underline focus:outline-none active:bg-blue-700 active:no-underline">Go somewhere</a>
        <a href="#!" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-transparent border-solid rounded cursor-pointer hover:text-blue-700 hover:underline focus:outline-none active:text-blue-700 active:underline">Another Link</a>
      </div>
      <div class="p-4 bg-gray-300 bg-opacity-25 border-t border-inherit">2 days ago</div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-right bg-white border border-gray-400 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25 border-b border-inherit">Featured</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Special title treatment</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" role="button" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 hover:no-underline focus:outline-none active:bg-blue-700 active:no-underline">Go somewhere</a>
        <a href="#!" class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-transparent border-solid rounded cursor-pointer hover:text-blue-700 hover:underline focus:outline-none active:text-blue-700 active:underline">Another Link</a>
      </div>
      <div class="p-4 bg-gray-300 bg-opacity-25 border-t border-inherit">2 days ago</div>
    </div>
  </template>
</code-preview>

## Background and color

<code-preview>
  <template>
    <div class="w-full overflow-auto text-white bg-blue-600 border border-blue-700 rounded sm:w-2/5">
      <div class="p-4 bg-gray-500 bg-opacity-25 border-b border-blue-700">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Primary Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-white bg-gray-600 border border-gray-700 rounded sm:w-2/5">
      <div class="p-4 bg-gray-500 bg-opacity-25 border-b border-gray-700">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Secondary Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-white bg-green-500 border border-green-600 rounded sm:w-2/5">
      <div class="p-4 bg-gray-500 bg-opacity-25 border-b border-green-600">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Success Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-white bg-red-600 border border-red-700 rounded sm:w-2/5">
      <div class="p-4 bg-gray-500 bg-opacity-25 border-b border-red-700">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Danger Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-white bg-yellow-500 border border-yellow-600 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25 border-b border-yellow-600">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Warning Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-white bg-teal-500 border border-teal-600 rounded sm:w-2/5">
      <div class="p-4 bg-gray-500 bg-opacity-25 border-b border-teal-600">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Info Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto bg-gray-200 border border-gray-300 rounded sm:w-2/5 text-dark">
      <div class="p-4 bg-gray-300 bg-opacity-25 border-b border-gray-300">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Light Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-white bg-gray-800 border border-gray-900 rounded sm:w-2/5">
      <div class="p-4 bg-gray-700 bg-opacity-25 border-b border-gray-900">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Dark Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

## Outline Color

<code-preview>
  <template>
    <div class="w-full overflow-auto text-blue-600 border border-blue-600 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Primary Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-gray-600 border border-gray-600 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Secondary Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-green-500 border border-green-500 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Success Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-red-600 border border-red-600 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Danger Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-yellow-500 border border-yellow-500 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Warning Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-teal-500 border border-teal-500 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Info Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-gray-800 border border-gray-200 rounded sm:w-2/5 text-">
      <div class="p-4 bg-gray-300 bg-opacity-25">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Light Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>

<code-preview>
  <template>
    <div class="w-full overflow-auto text-gray-800 border border-gray-800 rounded sm:w-2/5">
      <div class="p-4 bg-gray-300 bg-opacity-25">Header</div>
      <div class="p-4">
        <h5 class="mb-3 text-xl font-medium">Dark Card</h5>
        <p class="mb-4">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </template>
</code-preview>
