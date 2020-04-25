let q = async.queue((video, callback) => {
  if (video.id.kind === PLAYLIST_TYPE) {
      youtube.playlists.list({
        key: apiKey,
        id: video.id.playlistId,
        part: 'contentDetails'
      }, (err, response) => {
        if (err) {
          console.log(err);
          callback(err);
        }
        video.itemCount = response.videos[0].contentDetails.itemCount;
        callback();
      });
    }
}, 10);

q.push(videos);