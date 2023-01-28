# Forms

## Basic Overview

<code-preview>
  <template>
    <form class="px-6 py-3 bg-white">
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="email">Email address</label>
        <input class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" type="email" name="email" placeholder="user@example.com" aria-label="Email">
        <small class="text-sm text-gray-600">We'll never share your email with anyone else.</small>
      </div>
      <div class="flex flex-col flex-wrap gap-2 mb-5">
        <label for="password">Password</label>
        <input class="px-3 py-2 placeholder-gray-600 align-middle bg-white border border-gray-400 rounded outline-none focus:border-blue-600 focus:shadow-outline" type="password" name="password" placeholder="Password" aria-label="Password">
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
