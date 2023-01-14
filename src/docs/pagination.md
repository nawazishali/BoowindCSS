# Pagination

## Basic pagination

<code-preview>
  <template>
    <nav aria-label="Page navigation example">
      <ul class="inline-flex overflow-hidden bg-white border border-solid rounded">
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 active:bg-gray-200 focus:outline-none"><a class="page-link" href="#">Previous</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 active:bg-gray-200 focus:outline-none"><a class="page-link" href="#">1</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 active:bg-gray-200 focus:outline-none"><a class="page-link" href="#">2</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 active:bg-gray-200 focus:outline-none"><a class="page-link" href="#">3</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-solid cursor-pointer hover:bg-gray-200 active:bg-gray-200 focus:outline-none"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </template>
</code-preview>

## Working with icons

<code-preview>
  <template>
    <nav aria-label="Page navigation example">
      <ul class="inline-flex overflow-hidden bg-white border border-solid rounded">
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200">
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">1</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">2</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">3</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200">
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
</code-preview>


## Disabled and Active states

<code-preview>
  <template>
    <nav aria-label="Page navigation example">
      <ul class="inline-flex overflow-hidden bg-white border border-solid rounded">
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-gray-400 align-middle border-r border-solid cursor-not-allowed focus:outline-none">
          <a href="#" aria-label="Previous" class="cursor-not-allowed"> Previous </a>
        </li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">1</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">2</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">3</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200">
          <a href="#" aria-label="Next">
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
</code-preview>

## Sizing

<code-preview>
  <template>
    <nav aria-label="Page navigation example">
      <ul class="inline-flex overflow-hidden bg-white border border-solid rounded">
        <li class="inline-block px-6 py-3 text-xl font-normal leading-8 text-center text-white align-middle bg-blue-600 border-r border-solid cursor-pointer focus:outline-none"><a class="page-link" href="#">1</a></li>
        <li class="inline-block px-6 py-3 text-xl font-normal leading-8 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">2</a></li>
        <li class="inline-block px-6 py-3 text-xl font-normal leading-8 text-center text-blue-600 align-middle cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">3</a></li>
      </ul>
    </nav>
  </template>
</code-preview>

<code-preview>
  <template>
    <nav aria-label="Page navigation example">
      <ul class="inline-flex overflow-hidden bg-white border border-solid rounded">
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-white align-middle bg-blue-600 border-r border-solid cursor-pointer focus:outline-none"><a class="page-link" href="#">1</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">2</a></li>
        <li class="inline-block px-3 py-2 text-base font-normal leading-6 text-center text-blue-600 align-middle cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">3</a></li>
      </ul>
    </nav>
  </template>
</code-preview>

<code-preview>
  <template>
    <nav aria-label="Page navigation example">
      <ul class="inline-flex overflow-hidden bg-white border border-solid rounded">
        <li class="inline-block px-2 py-1 text-sm font-normal leading-6 text-center text-white align-middle bg-blue-600 border-r border-solid cursor-pointer focus:outline-none"><a class="page-link" href="#">1</a></li>
        <li class="inline-block px-2 py-1 text-sm font-normal leading-6 text-center text-blue-600 align-middle border-r border-solid cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">2</a></li>
        <li class="inline-block px-2 py-1 text-sm font-normal leading-6 text-center text-blue-600 align-middle cursor-pointer hover:bg-gray-200 focus:outline-none active:bg-gray-200"><a class="page-link" href="#">3</a></li>
      </ul>
    </nav>
  </template>
</code-preview>



