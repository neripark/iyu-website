import { createClient } from 'contentful';

// api call function
const client = createClient({
  space: process.env.contentfulSpaceId,
  accessToken: process.env.contentfulAccessToken
});
export const getEntries = () => client.getEntries();

// type of liveDetails
export const typeOfLiveDetail = {
  title: {
    type: String,
    default: null
  },
  heading: {
    type: String,
    default: null
  },
  place: {
    type: String,
    default: null
  },
  ticket: {
    type: String,
    default: null
  },
  timeOpen: {
    type: String,
    default: null
  },
  timeStart: {
    type: String,
    default: null
  },
  timeIyu: {
    type: String,
    default: null
  },
  with: {
    type: Array,
    default: []
  }
};
