import { Handler } from '@netlify/functions';
import db, { Webinar } from '../database';

const handler: Handler = async (event) => {
  try {
    if (event.body) {
      const { id } = JSON.parse(event.body) as Webinar;

      console.log('id', id);

      await db.read();
      const webinar = db.data?.webinars.filter((w) => w.id === id);

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          webinar: webinar?.[0],
        }),
      };
    }

    throw new Error('Missing parameters.');
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, webinar: null }),
    };
  }
};

export { handler };
