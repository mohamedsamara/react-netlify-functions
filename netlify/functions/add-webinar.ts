import { Handler } from '@netlify/functions';

interface Webinar {
  title: string;
  description: string;
  webinar_url: string;
  start_date: Date;
  end_date: Date;
  banner_url: string;
}

const handler: Handler = async (event) => {
  try {
    if (event.body) {
      const {
        title,
        description,
        webinar_url,
        start_date,
        end_date,
        banner_url,
      } = JSON.parse(event.body) as Webinar;

      console.log(event.body);

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    }

    throw new Error('Missing parameters.');
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false }),
    };
  }
};

export { handler };
