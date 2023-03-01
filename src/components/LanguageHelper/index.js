import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { defaultLang, setLang } from "../../store/language";

const LanguageHelper = ({ selectedLang }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const otherLangList = ['en'];
    const defaultLangMatch = [defaultLang, ''];
    let currentLang = selectedLang || window.location.pathname.split('/')[1];
    currentLang = otherLangList.includes(currentLang) ? currentLang : defaultLang;

    let currentPath = defaultLangMatch.includes(currentLang) ? '' : `/${currentLang}`;
    
    dispatch(setLang({
      lang: currentLang,
      path: currentPath,
    }));
  }, [selectedLang])

  return (<></>)
}

export default LanguageHelper;