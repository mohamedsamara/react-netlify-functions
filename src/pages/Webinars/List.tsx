import { Link } from 'react-router-dom';
import { IWebinar } from './types';

interface ListProps {
  webinars: IWebinar[];
}

const List = (props: ListProps) => {
  const { webinars } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
      {webinars.map((webinar: IWebinar) => (
        <Link key={webinar.id} to={`/webinars/${webinar.id}`} className="">
          <div className="bg-white rounded-lg h-full">
            <img
              src={webinar.banner_url}
              alt="webinar banner"
              className="min-h-[190px] max-h-[190px] object-cover rounded-t-lg"
            />
            <div className="p-3">
              <p className="font-semibold">{webinar.title}</p>
              <p className="text-gray-500 pt-2">{webinar.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
