import { Link } from 'react-router-dom';

import Layout from 'components/Layouts/Default';

const Webinars = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen bg-white pt-[40px]">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-row justify-start items-center">
            <h1 className="text-xl font-semibold text-center">Webinars</h1>
            <Link to="/webinars/add" className="text-blue-500 pl-3">
              Add Webinar
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Webinars;
