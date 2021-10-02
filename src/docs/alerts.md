# Alerts

## Plain Alerts

<code-preview>
  <template>
    <div class="px-5 py-3 mt-2 text-base text-blue-800 bg-blue-200 border border-blue-300 border-solid rounded" role="alert">
      A simple primary alert—check it out!
    </div>
    <div class="px-5 py-3 mt-4 text-base text-gray-800 bg-gray-200 border border-gray-300 border-solid rounded" role="alert">
      A simple secondary alert—check it out!
    </div>
    <div class="px-5 py-3 mt-4 text-base text-green-800 bg-green-200 border border-green-300 border-solid rounded" role="alert">
      A simple success alert—check it out!
    </div>
    <div class="px-5 py-3 mt-4 text-base text-red-800 bg-red-200 border border-red-300 border-solid rounded" role="alert">
      A simple danger alert—check it out!
    </div>
    <div class="px-5 py-3 mt-4 text-base text-yellow-800 bg-yellow-200 border border-yellow-300 border-solid rounded" role="alert">
      A simple warning alert—check it out!
    </div>
    <div class="px-5 py-3 mt-4 text-base text-teal-800 bg-teal-200 border border-teal-300 border-solid rounded" role="alert">
      A simple info alert—check it out!
    </div>
    <div class="px-5 py-3 mt-4 text-base text-gray-600 bg-gray-100 border border-gray-200 border-solid rounded" role="alert">
      A simple light alert—check it out!
    </div>
    <div class="px-5 py-3 mt-4 text-base text-gray-900 bg-gray-300 border border-gray-400 border-solid rounded" role="alert">
      A simple dark alert—check it out!
    </div>
  </template>
</code-preview>

## Alerts with Link

<code-preview>
  <template>
    <div class="px-5 py-3 mt-2 text-base text-blue-800 bg-blue-200 border border-blue-300 border-solid rounded" role="alert">
      A simple primary alert with <a href="#!" class="font-bold text-blue-900 hover:underline">an example link</a>. Give it a click if you like.
    </div>
    <div class="px-5 py-3 mt-4 text-base text-gray-800 bg-gray-200 border border-gray-300 border-solid rounded" role="alert">
      A simple secondary alert with <a href="#!" class="font-bold text-gray-900 hover:underline">an example link</a>. Give it a click if you like.
    </div>
    <div class="px-5 py-3 mt-4 text-base text-green-800 bg-green-200 border border-green-300 border-solid rounded" role="alert">
      A simple success alert with <a href="#!" class="font-bold text-green-900 hover:underline">an example link</a>. Give it a click if you like.
    </div>
    <div class="px-5 py-3 mt-4 text-base text-red-800 bg-red-200 border border-red-300 border-solid rounded" role="alert">
      A simple danger alert with <a href="#!" class="font-bold text-red-900 hover:underline">an example link</a>. Give it a click if you like.
    </div>
    <div class="px-5 py-3 mt-4 text-base text-yellow-800 bg-yellow-200 border border-yellow-300 border-solid rounded" role="alert">
      A simple warning alert with <a href="#!" class="font-bold text-yellow-900 hover:underline">an example link</a>. Give it a click if you like.
    </div>
    <div class="px-5 py-3 mt-4 text-base text-teal-800 bg-teal-200 border border-teal-300 border-solid rounded" role="alert">
      A simple info alert with <a href="#!" class="font-bold text-teal-900 hover:underline">an example link</a>. Give it a click if you like.
    </div>
    <div class="px-5 py-3 mt-4 text-base text-gray-600 bg-gray-100 border border-gray-200 border-solid rounded" role="alert">
      A simple light alert with <a href="#!" class="font-bold text-gray-700 hover:underline">an example link</a>. Give it a click if you like.
    </div>
    <div class="px-5 py-3 mt-4 text-base text-gray-900 bg-gray-300 border border-gray-400 border-solid rounded" role="alert">
      A simple dark alert with <a href="#!" class="font-bold text-gray-900 hover:underline">an example link</a>. Give it a click if you like.
    </div>
  </template>
</code-preview>

## Additional Content

<code-preview>
  <div class="px-5 py-3 text-base text-green-800 bg-green-200 border border-green-300 border-solid rounded" role="alert">
    <h4 class="m-0 mb-2 text-xl font-medium leading-tight">Well done!</h4>
    <p class="m-0 mb-2 leading-normal">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr class="my-3 border-t border-green-300">
    <p class="m-0 leading-normal">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>
</code-preview>

## Dismissing

<code-preview>
  <div class="relative px-5 py-3 mt-4 text-base text-yellow-800 bg-yellow-200 border border-yellow-300 border-solid rounded pr-9" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="absolute inset-y-0 right-0 block px-4 text-2xl font-semibold text-yellow-600" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</code-preview>
