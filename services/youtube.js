import { google } from 'googleapis';

const youtube = google.youtube('v3');

const youtubeService = google.youtube({
  version: 'v3',
  auth: 'AIzaSyD9PuHJD422BTixlRbGdL17FTIIO6mV1vU', // Replace with your actual API key
});

export default youtubeService;
