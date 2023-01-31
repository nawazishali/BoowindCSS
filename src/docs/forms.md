# Forms

## Basic Overview

<code-preview>
  <template>
    <form class="px-6 py-3 bg-white">
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="email">Email address</label>
        <input id="email" class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" type="email" name="email" placeholder="user@example.com" aria-label="Email">
        <small class="text-sm text-gray-600">We'll never share your email with anyone else.</small>
      </div>
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="password">Password</label>
        <input id="password" class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" type="password" name="password" placeholder="Password" aria-label="Password">
      </div>
      <div class="flex flex-row flex-wrap items-center gap-2 mb-5">
        <input type="checkbox" id="exampleCheck1">
        <label for="exampleCheck1">Check me out</label>
      </div>
      <button
        type="button"
        class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-transparent border-solid rounded cursor-pointer hover:bg-blue-700 active:bg-blue-700">
        Sign in
      </button>
    </form>
  </template>
</code-preview>

## Select Example

<code-preview>
  <template>
    <form class="px-6 py-3 bg-white">
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="singleSelect">Single Select</label>
        <select id="singleSelect" class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="multipleSelect">Single Select</label>
        <select id="multipleSelect" multiple class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </form>
  </template>
</code-preview>

## Textarea Example

<code-preview>
  <template>
    <form class="px-6 py-3 bg-white">
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="textarea">Textarea</label>
        <textarea id="textarea" class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" type="textarea" name="textarea" placeholder="This is some example text" aria-label="textarea" rows="3"></textarea>
      </div>
    </form>
  </template>
</code-preview>

## File Input

<code-preview>
  <template>
    <form class="px-6 py-3 bg-white">
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="file">File input</label>
        <input id="file" class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" type="file" name="file" aria-label="file">
      </div>
    </form>
  </template>
</code-preview>

## Sizing

<code-preview>
  <template>
    <form class="px-6 py-3 bg-white">
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="emailLarge">Large Input</label>
        <input id="emailLarge" class="px-4 py-2 text-xl leading-8 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" type="emailLarge" name="emailLarge" placeholder="user@example.com" aria-label="EmailLarge">
      </div>
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="emailNormal">Normal Input</label>
        <input id="emailNormal" class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" type="emailNormal" name="emailNormal" placeholder="user@example.com" aria-label="EmailNormal">
      </div>
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="emailsmall">Small Input</label>
        <input id="emailsmall" class="px-2 py-1 text-sm placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline leadeing-6" type="emailsmall" name="emailsmall" placeholder="user@example.com" aria-label="Emailsmall">
      </div>
    </form>
  </template>
</code-preview>


## Range input

<code-preview>
  <template>
    <form class="px-6 py-3 bg-white">
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="range">Range</label>
        <input id="range" class="py-2" type="range" name="range" aria-label="range">
      </div>
    </form>
  </template>
</code-preview>
