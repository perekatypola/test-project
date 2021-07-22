export const selectLocations = (state: RootState): LocationState =>
  state.locations;

export const selectLocation =
  (locationId: number) =>
  (state: RootState): Location | undefined =>
    state.locations.data.find(el => el.id === locationId);
