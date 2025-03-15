import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./candidateSlice";

export const store = configureStore({
  reducer: {
    candidats: candidateReducer, // Ajout du reducer des candidats
  },
});

// ✅ Définir le type RootState
export type RootState = ReturnType<typeof store.getState>;

// ✅ Définir le type AppDispatch
export type AppDispatch = typeof store.dispatch;


