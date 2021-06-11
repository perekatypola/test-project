import axios from 'axios';
import CharactersResponse from 'interfaces/apiCharactersResponse';
import ACTIONS from 'сonstants/actions';

function getCharacters(characters: any) {
  return {
    type: ACTIONS.ADDCHARACTERS,
    characters,
  };
}

function errorOccured(error: any) {
  return {
    type: ACTIONS.FAILURE,
    error,
  };
}

const actions = {
  addCharactersThunk: () => async dispatch => {
    try {
      const characters: CharactersResponse = await axios.get('character');
      await dispatch(getCharacters(characters.results));
    } catch (error) {
      console.log(error);
    }
  },
};

export default actions;
