import { IWebinar } from './types';
import MTZ from 'moment-timezone';
import Timer from 'components/Timer';
import { Link } from 'react-router-dom';

interface UpcomingProps {
  webinar: IWebinar;
}

const Upcoming = (props: UpcomingProps) => {
  const { webinar } = props;

  const from = new Date(webinar?.start_date);

  const timezoneDatePST = MTZ(from)
    .tz('America/Los_Angeles')
    .format('MMMM Do YYYY, h:mm a');

  return (
    <div className="pt-6">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Upcoming Webinar
      </h1>

      <div className="relative">
        <img
          className="rounded-lg object-cover w-full h-[375px]"
          src={webinar.banner_url}
          alt="upcoming-webinar"
        />

        <div className="absolute inset-x-0 top-0">
          <div className="flex flex-col md:flex-row items-center justify-between p-10">
            <div className="flex items-center">
              <p className="text-white pr-4">{webinar.speaker}</p>
              <p className="text-white">{`${timezoneDatePST} PST`}</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-white">{webinar.title}</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <Timer from={from}>
            <Link
              className="flex text-blue-500 font-semibold text-lg"
              to={`/webinars/${webinar?.id}`}
            >
              <p className="text-white">Watch Now</p>
            </Link>
          </Timer>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
