import Layout from 'components/Layouts/Default';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-center">Home</h1>
        <div className="text-center">
          <p className="text-lg pl-2 text-gray-500 mt-5">
            WebinarBox is a web application to view webinars.
          </p>
          <p className="text-md pl-2 text-blue-500 mt-1">
            Built with React Netlify Functions
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
