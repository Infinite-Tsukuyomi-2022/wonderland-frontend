import { createSlice } from "@reduxjs/toolkit";

export const defaultLang = 'zh-TW';

const language = createSlice({
    name: 'language',
    initialState: {
      'lang': defaultLang,
      'path': ''
    },
    reducers: {
      setLang: (state, action) =>{
        const { lang, path } = action.payload;
        state.lang = lang;
        state.path = path;
      }
    }
});

export const { setLang } = language.actions;
export default language.reducer;
