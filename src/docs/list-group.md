# List Group

<p class="m-0 text-2xl font-light"></p>

## Basic example

<code-preview>
  <template>
    <ul class="max-w-sm overflow-hidden border border-gray-300 rounded">
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">An item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A second item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A third item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A fourth item</li>
        <li class="px-5 py-3 m-0 bg-white ">And a fifth one</li>
    </ul>
  </template>
</code-preview>

## Active items

<code-preview>
  <template>
    <ul class="max-w-sm overflow-hidden border border-gray-300 rounded">
        <li class="px-5 py-3 m-0 text-white bg-blue-600 border-b border-gray-300">An active item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A second item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A third item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A fourth item</li>
        <li class="px-5 py-3 m-0 bg-white ">And a fifth one</li>
    </ul>
  </template>
</code-preview>

## disabled items

<code-preview>
  <template>
    <ul class="max-w-sm overflow-hidden border border-gray-300 rounded">
        <li class="px-5 py-3 m-0 text-gray-400 bg-white border-b border-gray-300">A disabled item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A second item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A third item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A fourth item</li>
        <li class="px-5 py-3 m-0 bg-white ">And a fifth one</li>
    </ul>
  </template>
</code-preview>

## Links and Buttons

<code-preview>
  <template>
    <ul class="max-w-sm overflow-hidden border border-gray-300 rounded">
        <a href="#" class="block px-5 py-3 m-0 text-current text-white no-underline bg-blue-600 border-b border-gray-300" aria-current="true"> The current link item </a>
        <a href="#" class="block px-5 py-3 m-0 text-current no-underline bg-white border-b border-gray-300">A second link item</a>
        <a href="#" class="block px-5 py-3 m-0 text-current no-underline bg-white border-b border-gray-300">A third link item</a>
        <a href="#" class="block px-5 py-3 m-0 text-current no-underline bg-white border-b border-gray-300">A fourth link item</a>
        <a class="block px-5 py-3 m-0 text-current text-gray-400 no-underline bg-white">A disabled link item</a>
    </ul>
  </template>
</code-preview>

<code-preview>
  <template>
    <ul class="max-w-sm overflow-hidden border border-gray-300 rounded">
        <button type="button" class="block w-full px-5 py-3 m-0 text-white bg-blue-600 border-b border-gray-300" aria-current="true"> The current button item </button>
        <button type="button" class="block w-full px-5 py-3 m-0 bg-white border-b border-gray-300">A second button item</button>
        <button type="button" class="block w-full px-5 py-3 m-0 bg-white border-b border-gray-300">A third button item</button>
        <button type="button" class="block w-full px-5 py-3 m-0 bg-white border-b border-gray-300">A fourth button item</button>
        <button type="button" disabled class="block w-full px-5 py-3 m-0 text-gray-400 bg-white">A disabled button item</button>
    </ul>
  </template>
</code-preview>

## Flush

<code-preview>
  <template>
    <ul class="max-w-sm">
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">An item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A second item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A third item</li>
        <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A fourth item</li>
        <li class="px-5 py-3 m-0 bg-white ">And a fifth one</li>
    </ul>
  </template>
</code-preview>

## Horizontal list

<code-preview>
  <template>
    <ul class="flex flex-row max-w-sm overflow-hidden border border-gray-300 rounded">
        <li class="flex-grow block px-5 py-3 m-0 bg-white border-gray-300">An item</li>
        <li class="flex-grow block px-5 py-3 m-0 bg-white border-l border-gray-300">A second item</li>
        <li class="flex-grow block px-5 py-3 m-0 bg-white border-l border-gray-300">A third item</li>
    </ul>
    <ul class="flex flex-row max-w-sm overflow-hidden border border-gray-300 rounded">
        <li class="flex-grow block px-5 py-3 m-0 bg-white border-gray-300">An item</li>
        <li class="flex-grow block px-5 py-3 m-0 bg-white border-l border-gray-300">A second item</li>
        <li class="flex-grow block px-5 py-3 m-0 bg-white border-l border-gray-300">A third item</li>
    </ul>
    <ul class="flex flex-row max-w-sm overflow-hidden border border-gray-300 rounded">
        <li class="flex-grow block px-5 py-3 m-0 bg-white border-gray-300">An item</li>
        <li class="flex-grow block px-5 py-3 m-0 bg-white border-l border-gray-300">A second item</li>
        <li class="flex-grow block px-5 py-3 m-0 bg-white border-l border-gray-300">A third item</li>
    </ul>
  </template>
</code-preview>

## Colored list group

<code-preview>
  <template>
    <ul class="max-w-sm overflow-hidden border border-gray-300 rounded">
      <li class="px-5 py-3 m-0 bg-white border-b border-gray-300">A simple basic item</li>
      <li class="px-5 py-3 m-0 text-blue-800 bg-blue-200 border-b">A simple primary item</li>
      <li class="px-5 py-3 m-0 text-gray-800 bg-gray-200 border-b">A simple secondary item</li>
      <li class="px-5 py-3 m-0 text-green-800 bg-green-200 border-b">A simple success item</li>
      <li class="px-5 py-3 m-0 text-red-800 bg-red-200 border-b">A simple danger item</li>
      <li class="px-5 py-3 m-0 text-yellow-800 bg-yellow-200 border-b">A simple warning item</li>
      <li class="px-5 py-3 m-0 text-teal-800 bg-teal-200 border-b">A simple info item</li>
      <li class="px-5 py-3 m-0 text-gray-600 bg-gray-100 border-b">A simple light item</li>
      <li class="px-5 py-3 m-0 text-gray-900 bg-gray-300">A simple dark item</li>
    </ul>
  </template>
</code-preview>

## Custom list group

<code-preview>
  <template>
    <div class="max-w-sm overflow-hidden text-gray-700 border border-gray-300 rounded">
      <a href="#" class="block px-5 py-3 m-0 text-white no-underline bg-blue-600 border-b border-gray-300">
        <div class="flex flex-row justify-between d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-xl">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="m-0 mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </a>
      <a href="#" class="block px-5 py-3 m-0 text-current no-underline bg-white border-b border-gray-300">
        <div class="flex flex-row justify-between d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-xl">List group item heading</h5>
          <small class="text-gray-500">3 days ago</small>
        </div>
        <p class="m-0 mb-1">Some placeholder content in a paragraph.</p>
        <small class="text-gray-500">And some muted small print.</small>
      </a>
      <a href="#" class="block px-5 py-3 m-0 text-current no-underline bg-white">
        <div class="flex flex-row justify-between d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-xl">List group item heading</h5>
          <small class="text-gray-500">3 days ago</small>
        </div>
        <p class="m-0 mb-1">Some placeholder content in a paragraph.</p>
        <small class="text-gray-500">And some muted small print.</small>
      </a>
    </div>
  </template>
</code-preview>
