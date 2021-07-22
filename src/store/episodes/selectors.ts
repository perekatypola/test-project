export const selectEpisodes = (state: RootState): EpisodeState =>
  state.episodes;

export const selectEpisode =
  (episodeId: number) =>
  (state: RootState): Episode | undefined =>
    state.episodes.data.find(el => el.id === episodeId);
