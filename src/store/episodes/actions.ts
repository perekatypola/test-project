import EPISODES_ACTIONS from './constants';

export const fetchEpisodesSuccess = (
  episodes: Episode[],
): Action<Partial<EpisodeState>> => ({
  type: EPISODES_ACTIONS.FETCH_EPISODES_SUCCESS,
  payload: {data: episodes},
});

export const fetchEpisodesFailure = (): Action<Partial<EpisodeState>> => ({
  type: EPISODES_ACTIONS.FETCH_EPISODES_FAILURE,
});

export const fetchEpisodesRequest = (): Action<Partial<EpisodeState>> => ({
  type: EPISODES_ACTIONS.FETCH_EPISODES_REQUEST,
});
