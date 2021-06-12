import {ADD_GALLERY,GET_GALLERY} from '../type';

export const gallery = (data) => (
  {
  type: ADD_GALLERY,
  data,
});
export const getgallery = () => (
  {
  type: GET_GALLERY
});