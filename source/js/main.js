import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initGallery2} from "./modules/initGallery2";

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

window.addEventListener('load', () => {
  initGallery2()
})
