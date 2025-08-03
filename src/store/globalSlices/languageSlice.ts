import { createAppSlice } from '../createAppSlice';

const initialState: string = 'russian';

export const languageSlice = createAppSlice({
  name: 'language',

  initialState: initialState,

  reducers: {
    toggleLanguage: (_, action) => action.payload,
  },

  selectors: {
    selectLanguage: (language) => language,
  },
});

export const { toggleLanguage } = languageSlice.actions;
export const { selectLanguage } = languageSlice.selectors;
