import Toast from 'react-native-root-toast';
import axios from 'axios';
import {URLS} from '@app/constants';

import {
  fetchEpisodesFailure,
  fetchEpisodesRequest,
  fetchEpisodesSuccess,
} from './actions';

export const fetchEpisodesThunk = (): AsyncAction => async dispatch => {
  try {
    dispatch(fetchEpisodesRequest());
    const episodes: EpisodeResponse = await axios.get(URLS.EPISODE);
    dispatch(fetchEpisodesSuccess(episodes.results));
  } catch (error) {
    dispatch(fetchEpisodesFailure());
    Toast.show(error.message);
  }
};
