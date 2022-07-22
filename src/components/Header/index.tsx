import { Link } from 'react-router-dom';

const menu = [
  { url: '/', text: 'Home' },
  { url: '/webinars', text: 'Webinars' },
];

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-100 py-4 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center px-4 lg:px-0">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <Link
              className="text-gray-700 no-underline hover:no-underline"
              to={'/'}
            >
              <span className="text-2xl">WebinarBox</span>
            </Link>
          </div>
          <div className="flex w-full pt-2 content-center justify-end md:w-1/2">
            <ul className="list-reset flex justify-start flex-1 md:flex-none items-center">
              {menu.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <Link
                    className="inline-block text-gray-700 no-underline hover:text-gray-900 hover:text-underline py-2 mr-4 md:mr-0 md:ml-4"
                    to={item.url}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
