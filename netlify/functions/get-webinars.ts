import { Handler } from '@netlify/functions';
import db from '../database';

const handler: Handler = async () => {
  try {
    await db.read();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        webinars: db.data?.webinars,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, webinars: [] }),
    };
  }
};

export { handler };
