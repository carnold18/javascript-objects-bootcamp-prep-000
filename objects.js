var playlist = {artist: 'song'};

function updatePlaylist(playlist,name,song) {
  playlist[name] = song;
  return playlist;}

function removeFromPlaylist(playlist,artist) {
  return delete playlist.artist;}