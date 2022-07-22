import { Draft } from 'immer';
import { useImmer } from 'use-immer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as moment from 'moment';

import Layout from 'components/Layouts/Default';
import ImageUploader from 'components/ImageUploader';

interface WebinarState {
  title: string;
  description: string;
  webinar_url: string;
  start_date: Date;
  end_date: Date;
  banner: any;
}

const AddWebinar = () => {
  const [webinar, setWebinar] = useImmer<WebinarState>({
    title: '',
    description: '',
    webinar_url: '',
    start_date: moment().toDate(),
    end_date: moment().toDate(),
    banner: null,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (value: any, name: keyof WebinarState) => {
    setWebinar((draft: Draft<WebinarState>) => {
      draft[name] = value;
    });
  };

  return (
    <Layout>
      <div className="flex flex-col bg-gray-100 py-[40px]">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="max-w-xl mx-auto bg-white p-6 rounded-lg">
            <h1 className="text-2xl font-semibold text-center pt-4">
              Add Webinar
            </h1>

            <form className="">
              <div className="flex flex-col w-full my-5">
                <label htmlFor="title" className="text-gray-500 mb-2">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:shadow-lg"
                  onChange={(e) => handleInputChange(e.target.value, 'title')}
                />
              </div>

              <div className="flex flex-col w-full my-5">
                <label htmlFor="description" className="text-gray-500 mb-2">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:shadow-lg"
                  onChange={(e) =>
                    handleInputChange(e.target.value, 'description')
                  }
                />
              </div>

              <div className="flex flex-col w-full my-5">
                <label htmlFor="webinar_url" className="text-gray-500 mb-2">
                  Webinar URL
                </label>
                <input
                  id="webinar_url"
                  name="webinar_url"
                  type="text"
                  placeholder="Webinar URL"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:shadow-lg"
                  onChange={(e) =>
                    handleInputChange(e.target.value, 'webinar_url')
                  }
                />
              </div>

              <div className="flex flex-col w-full my-5">
                <label htmlFor="webinar_url" className="text-gray-500 mb-2">
                  Start Date
                </label>
                <DatePicker
                  placeholderText="Start Date"
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:shadow-lg"
                  selected={webinar.start_date}
                  onChange={(date: Date) => {
                    handleInputChange(date, 'start_date');
                  }}
                />
              </div>
              <div className="flex flex-col w-full my-5">
                <label htmlFor="webinar_url" className="text-gray-500 mb-2">
                  End Date
                </label>
                <DatePicker
                  placeholderText="End Date"
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:shadow-lg"
                  selected={webinar.end_date}
                  onChange={(date: Date) => {
                    handleInputChange(date, 'end_date');
                  }}
                />
              </div>

              <div className="flex flex-col w-full my-5">
                <label htmlFor="webinar_url" className="text-gray-500 mb-2">
                  Banner
                </label>
                <ImageUploader
                  handleDrop={(files) => {
                    handleInputChange(files, 'banner');
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddWebinar;
