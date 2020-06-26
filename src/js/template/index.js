import '../../styles/styles.scss';
import 'bootstrap';

import 'babel-polyfill';

import {blockController} from './modules/blockController';

import {selectize} from './modules/common/selectize';
import {fileInput} from './modules/common/fileInput';
import {dropEye} from './modules/common/dropEye';
import {phonemask} from './modules/common/phonemask';
import {datepicker} from './modules/common/datepicker';
import {counter} from './modules/common/counter';
import {magnificPopupImage} from './modules/common/magnificPopupImage';
import {magnificPopupVideo} from './modules/common/magnificPopupVideo';
import {magnificPopupGallery} from './modules/common/magnificPopupGallery';
import {tabsToSelect} from './modules/common/tabsToSelect';
import {accordion} from './modules/common/accordion';
import {popover} from './modules/common/popover';
import {slider} from './modules/slider';
import {mobileMenu} from './modules/mobileMenu';

/**
 * Общий функционал для всех страниц
 */
// type your code here ..

//
// Базовые блоки
//

blockController.add(selectize, '.js-select');
blockController.add(fileInput, '.custom-file input[type="file"]');
blockController.add(dropEye, '.js-drop-eye');
blockController.add(phonemask, 'input[type="tel"]');
blockController.add(datepicker, '.js-datepicker');
blockController.add(counter, '.js-counter');
blockController.add(magnificPopupImage, '.js-mp-image');
blockController.add(magnificPopupVideo, '.js-mp-video');
blockController.add(magnificPopupGallery, '.js-mp-gallery');
blockController.add(tabsToSelect, '.js-tab-select');
blockController.add(accordion, '.js-accordion');
blockController.add(popover, "[data-toggle='popover']");
blockController.add(slider, ".js-slider");

//
// Блоки проекта
//

blockController.add(mobileMenu, '.js-mobile-menu');

// первичная инициализация
blockController.initAll();