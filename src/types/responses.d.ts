interface CharacterResponseInfo {
  next: string;
}

interface EpisodesResponseInfo {
  next: string;
}

interface CharactersResponse {
  info: CharacterResponseInfo;
  results: Character[];
}

interface EpisodeResponse {
  info: EpisodesResponseInfo;
  results: Episode[];
}
