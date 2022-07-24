import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { Link } from 'react-router-dom';

import { IWebinar } from './types';
import { webinarState } from './utils';
import Layout from 'components/Layouts/Default';
import Upcoming from './Upcoming';
import List from './List';

const Webinars = () => {
  const [webinars, setWebinars] = useImmer<IWebinar[]>([]);
  const [upcoming, setUpcoming] = useImmer<IWebinar>(webinarState);

  useEffect(() => {
    fetchWebinars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchWebinars = async () => {
    try {
      const response = await fetch('/.netlify/functions/get-webinars', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });

      if (response.status === 200) {
        const data = await response.json();
        const { webinars } = data;
        if (webinars) {
          setWebinars(webinars.slice(1));
          setUpcoming(webinars[0]);
        }
      }
    } catch (error) {
      console.log('s');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col bg-gray-100 py-[40px]">
        <div className="container mx-auto px-4 lg:px-0">
          <Link to="/webinars/add" className="text-blue-500 text-lg">
            Add Webinar
          </Link>
          <Upcoming webinar={upcoming} />
          <List webinars={webinars} />
        </div>
      </div>
    </Layout>
  );
};

export default Webinars;
