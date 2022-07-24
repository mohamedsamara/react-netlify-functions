import path from 'path';

import { JSONFile, Low } from 'lowdb';

export interface Webinar {
  id: string;
  title: string;
  description: string;
  speaker: string;
  webinar_url: string;
  start_date: Date;
  end_date: Date;
  banner_url: string;
}

type Data = {
  webinars: Webinar[];
};

const filePath = path.resolve('netlify', 'data', 'db.json');
const adapter = new JSONFile<Data>(filePath);
const db = new Low(adapter);

db.data ||= { webinars: [] };
export default db;
