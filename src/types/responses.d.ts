export interface CharacterResponseInfo {
  next: string;
}
export interface CharactersResponse {
  info: CharacterResponseInfo;
  results: Character[];
}
