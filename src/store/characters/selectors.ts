export const selectCharacters = (state: RootState): CharacterState =>
  state.characters;

export const selectCharacter =
  (characterId: number) =>
  (state: RootState): Character | undefined =>
    state.characters.data.find(el => el.id === characterId);
