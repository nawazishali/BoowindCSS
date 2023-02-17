# Breadcrumb

<p class="m-0 text-2xl font-light">Indicate the current page’s location within a navigational hierarchy.</p>

<code-preview>
  <nav aria-label="breadcrumb">
    <ol class="px-5 py-3 my-2 text-blue-600 bg-gray-200">
      <li class="inline text-gray-600" aria-current="page">
        <a href="#!" class="text-current hover:underline">Home</a>
      </li>
    </ol>
  </nav>
</code-preview>

<code-preview>
  <nav aria-label="breadcrumb">
    <ol class="px-5 py-3 my-2 text-blue-600 bg-gray-200">
      <li class="inline">
        <a href="#!" class="text-current hover:underline">Home</a>
      </li>
      <li class="inline" aria-current="page">
        <span class="mx-1 text-gray-600">/</span> 
        <a href="#!" class="text-current text-gray-600 hover:underline">Library</a>
      </li>
    </ol>
  </nav>
</code-preview>

<code-preview>
  <nav aria-label="breadcrumb">
    <ol class="px-5 py-3 my-2 text-blue-600 bg-gray-200">
      <li class="inline">
        <a href="#!" class="text-current hover:underline">Home</a>
      </li>
      <li class="inline">
        <span class="mx-1 text-gray-600">/</span> 
        <a href="#!" class="text-current hover:underline">Library</a>
      </li>
      <li class="inline" aria-current="page">
        <span class="mx-1 text-gray-600">/</span> 
        <a href="#!" class="text-current text-gray-600 hover:underline">Library</a>
      </li>
    </ol>
  </nav>
</code-preview>