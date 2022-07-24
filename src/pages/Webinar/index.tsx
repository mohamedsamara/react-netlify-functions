import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useImmer } from 'use-immer';
import MTZ from 'moment-timezone';

import Layout from 'components/Layouts/Default';
import { webinarState } from 'pages/Webinars/utils';
import { IWebinar } from 'pages/Webinars/types';

const Webinar = () => {
  const { id } = useParams();

  const [webinar, setWebinar] = useImmer<IWebinar>(webinarState);

  const from = new Date(webinar?.start_date);

  const timezoneDatePST = MTZ(from)
    .tz('America/Los_Angeles')
    .format('MMMM Do YYYY, h:mm a');

  useEffect(() => {
    if (id) {
      fetchWebinar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchWebinar = async () => {
    try {
      const response = await fetch('/.netlify/functions/get-webinar', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ id }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const { webinar } = data;
        setWebinar(webinar);
      }
    } catch (error) {
      console.log('s');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col h-full bg-gray-100 py-[40px]">
        <div className="container mx-auto px-4 lg:px-0">
          <Link to="/webinars" className="text-blue-500 text-lg">
            Back
          </Link>
          <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white rounded-lg mt-6">
            <div className="flex items-center">
              <p className="text-black pr-4">{webinar.speaker}</p>
              <p className="text-black">{`${timezoneDatePST} PST`}</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-black">{webinar.title}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Webinar;
