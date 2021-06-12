import {ieFix} from './utils/ie-fix';
import {initGallery} from "./modules/initGallery";

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

window.addEventListener('load', () => {
  initGallery()
})
