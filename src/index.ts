import {init} from '@twa.js/bridge';
import 'eruda';

// Init eruda.
(window as any).eruda.init();

// Init bridge.
(window as any).bridge = init({debug: true});
