import axios from 'axios';
import ACTIONS from '../../сonstants/actions';

function getCharacters(characters) {
  return {
    type: ACTIONS.ADDCHARACTERS,
    characters,
  };
}

function errorOccured(error) {
  return {
    type: ACTIONS.FAILURE,
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
