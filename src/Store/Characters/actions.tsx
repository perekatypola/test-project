import {CharactersResponse} from 'Interfaces/responses';
import ACTIONS from 'Constants/actions';
import api from 'Configs/api';

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
      const characters: CharactersResponse = await api.get('character');
      await dispatch(getCharacters(characters.results));
    } catch (error) {
      console.log(error);
    }
  },
};

export default actions;
