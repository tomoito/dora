import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import PokeReducer from "../features/Pokemon/PokemonSlice";
import DoraReducer from "../features/DraqueWalk/DraqueWalkSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    Pokemon: PokeReducer,
    Doraque: DoraReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
