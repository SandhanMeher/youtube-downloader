const fs = require('fs');
const ytdl = require('ytdl-core');

const url = 'https://youtu.be/UxyHA7fXhpQ?si=TTdy0pFKlVMZiV-5';
const output = 'video.mp4';

ytdl(url)
  .pipe(fs.createWriteStream(output))
  .on('finish', () => {
    console.log('Download completed!');
  })
  .on('error', (err) => {
    console.error('Error downloading video:', err);
  });
