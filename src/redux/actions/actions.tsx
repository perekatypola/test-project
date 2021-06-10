import axios from 'axios';

function getCharacters(characters) {
  return {
    type: 'Add characters',
    characters,
  };
}

function errorOccured(error) {
  return {
    type: 'Not successful reciever',
    error,
  };
}

const actions = {
  addCharactersThunk: () => async dispatch => {
    try {
      const characters = await axios.get('https://rickandmortyapi.com/api/character');
      await dispatch(getCharacters(characters.results));
    } catch (error) {
      console.log(error);
    }
  },
};

export default actions;
