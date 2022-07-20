import { Link } from 'react-router-dom';

const menu = [{ url: '/', text: 'Home' }];

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-100 p-2 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <Link
              className="text-gray-700 no-underline hover:no-underline"
              to={'/'}
            >
              <span className="text-xl pl-2">React Netlify Functions</span>
            </Link>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              {menu.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <Link
                    className="inline-block text-gray-700 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
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
