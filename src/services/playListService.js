
export default function getPlaylistByTemperature(temperature){
    if (temperature > 25) {
      return ['Musica Pop 1', 'Musica Pop 2', 'Musica Pop 3'];
    } else if (temperature >= 10 && temperature <= 25) {
      return ['Musica Rock 1', 'Musica Rock 2', 'Musica Rock 3'];
    } else {
      return ['Musica Classica 1', 'Musica Classica 2', 'Musica Classica 3'];
    }
  };
  