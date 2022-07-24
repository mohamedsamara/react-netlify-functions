import { MouseEvent } from 'react';
import { Draft } from 'immer';
import { useImmer } from 'use-immer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import {
  CLOUDINARY_CLOUDNAME,
  CLOUDINARY_UNSIGNED_PRESET,
} from '../../constants';
import { IWebinar } from './types';
import { webinarState } from './utils';
import Layout from 'components/Layouts/Default';
import ImageUploader from 'components/ImageUploader';

const AddWebinar = () => {
  const [banner, setBanner] = useImmer<File[]>([]);
  const [webinar, setWebinar] = useImmer<IWebinar>(webinarState);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (value: any, name: keyof IWebinar) => {
    setWebinar((draft: Draft<IWebinar>) => {
      draft[name] = value;
    });
  };

  const resetWebinarForm = () => {
    setWebinar((draft: Draft<IWebinar>) => {
      draft.title = '';
      draft.description = '';
      draft.speaker = '';
      draft.webinar_url = '';
      draft.banner_url = '';
      draft.start_date = moment().toDate();
      draft.end_date = moment().toDate();
    });
    setBanner([]);
  };

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append('file', banner[0]);
      formData.append('tags', 'browser_upload');
      formData.append('upload_preset', CLOUDINARY_UNSIGNED_PRESET);

      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUDNAME}/image/upload`,
        {
          method: 'post',
          body: formData,
        },
      );

      if (uploadResponse.status === 200) {
        const image = await uploadResponse.json();

        const payload = {
          ...webinar,
          banner_url: image.url,
          start_date: webinar.start_date.toString(),
          end_date: webinar.end_date.toString(),
        };

        const response = await fetch('/.netlify/functions/add-webinar', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(payload),
        });

        if (response.status === 200) {
          const data = await response.json();
          const { success } = data;
          if (success) resetWebinarForm();
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col bg-gray-100 py-[40px]">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="max-w-xl mx-auto bg-white p-6 rounded-lg">
            <h1 className="text-2xl font-semibold text-center pt-4">
              Add Webinar
            </h1>

            <form onSubmit={handleSubmit}>
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
                  value={webinar.title}
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
                  value={webinar.description}
                  onChange={(e) =>
                    handleInputChange(e.target.value, 'description')
                  }
                />
              </div>

              <div className="flex flex-col w-full my-5">
                <label htmlFor="description" className="text-gray-500 mb-2">
                  Speaker
                </label>
                <input
                  id="speaker"
                  name="speaker"
                  type="text"
                  placeholder="Speaker"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:shadow-lg"
                  value={webinar.speaker}
                  onChange={(e) => handleInputChange(e.target.value, 'speaker')}
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
                  value={webinar.webinar_url}
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
                  initialFiles={banner}
                  handleDrop={(files) => {
                    setBanner(files);
                  }}
                />
              </div>
              <button
                type="submit"
                className="bg-gray-100 p-4 rounded-lg w-full"
              >
                Add Webinar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddWebinar;
