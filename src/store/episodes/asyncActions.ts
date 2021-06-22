import Toast from 'react-native-root-toast';
import api from 'configs/api';
import {URLS} from '@app/constants';

import {
  fetchEpisodesFailure,
  fetchEpisodesRequest,
  fetchEpisodesSuccess,
} from './actions';

export const fetchEpisodesThunk = (): AsyncAction => async dispatch => {
  try {
    dispatch(fetchEpisodesRequest());
    const episodes: EpisodeResponse = await api.get(URLS.EPISODE);
    console.log(episodes);
    dispatch(fetchEpisodesSuccess(episodes.results));
  } catch (error) {
    dispatch(fetchEpisodesFailure());
    Toast.show(error.message);
  }
};
