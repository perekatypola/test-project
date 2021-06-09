import axios from 'axios';

function getCharacters(characters) {
  return {
    type: 'Add characters',
    characters,
  };
}

const actions = {
  addCharactersThunk: () => dispatch =>
    axios
      .get('/api/characters')
      .then(res => res.data)
      .then(characters => dispatch(getCharacters(characters))),
};

export default actions;
