import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Candidate = {
  id: number;
  nom: string;
  email: string;
};

const initialState: Candidate[] = [];

const candidateSlice = createSlice({
  name: "candidats",
  initialState,
  reducers: {
    addCandidate: (state, action: PayloadAction<{ nom: string; email: string }>) => {
      const newCandidate = {
        id: state.length > 0 ? state[state.length - 1].id + 1 : 1, // Génère un nouvel ID
        ...action.payload,
      };
      state.push(newCandidate); // ✅ Ajoute le nouveau candidat à la liste existante
    },
  },
});

export const { addCandidate } = candidateSlice.actions;
export default candidateSlice.reducer;
