import { Handler } from '@netlify/functions';
import short from 'short-uuid';

import db, { Webinar } from '../database';

const handler: Handler = async (event) => {
  try {
    if (event.body) {
      const {
        title,
        description,
        speaker,
        webinar_url,
        start_date,
        end_date,
        banner_url,
      } = JSON.parse(event.body) as Webinar;

      const webinar = {
        id: short.uuid(),
        title,
        description,
        speaker,
        webinar_url,
        start_date,
        end_date,
        banner_url,
      };

      db.data?.webinars.push(webinar);
      await db.write();

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
