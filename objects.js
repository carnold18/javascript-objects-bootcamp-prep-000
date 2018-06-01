var playlist = {artist: 'song'};

function updatePlaylist(playlist,name,song) {
  playlist[name] = song;
  return playlist;}

function removeFromPlaylist(playlist,name) {
  return delete playlist.name; 
}