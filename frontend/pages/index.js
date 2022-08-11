import Head from 'next/head'

export default function Home() {
  return (
    <nav class="flex items-center justify-between p-6 bg-black">
      <div>
        <h1 class="text-white">ACM</h1>
      </div>
      <div>
        <ul class="flex align-middle">
          <li class="ml-12">
            <a
              class="text-white hover:no-underline visited:text-white"
              href="/"
            >
              HOME
            </a>
          </li>
          <li class="ml-12">
            <a
              class="text-white hover:no-underline visited:text-white"
              href="/"
            >
              CALENDAR
            </a>
          </li>
          <li class="ml-12">
            <a
              class="text-gray-400 cursor-not-allowed visited:text-white"
              href="/"
            >
              FEATURED EVENTS
            </a>
          </li>
          <li class="ml-12">
            <a
              class="text-gray-400 cursor-not-allowed visited:text-white"
              href="/"
            >
              RESOURCES
            </a>
          </li>
          <li class="ml-12">
            <a
              class="text-gray-400 cursor-not-allowed visited:text-white"
              href="/"
            >
              ABOUT US
            </a>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          nav {
            position: fixed;
            width: 100%;
            height: 4em;
          }
          a:visited {
            color: white;
          }
        `}
      </style>
    </nav>
  )
}
