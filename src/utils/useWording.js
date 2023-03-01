import { useSelector } from 'react-redux';
import wording from '../constants/wording';

export const _w = (path) => {
  let result = wording;
  const paths = path.split('.');
  
  paths.forEach(path => {
    if (!result[path]) return;
    result = result[path];
  })

  return result;
}

export const _wl = (name) => {
  const { lang } = useSelector(state => state.language);
  const wording = _w(`${lang}.${name}`);
  return wording;
}

