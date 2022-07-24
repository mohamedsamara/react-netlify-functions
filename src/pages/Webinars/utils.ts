import moment from 'moment';

export const webinarState = {
  id: '',
  title: '',
  description: '',
  speaker: '',
  webinar_url: '',
  banner_url: '',
  start_date: moment().toDate(),
  end_date: moment().toDate(),
};
