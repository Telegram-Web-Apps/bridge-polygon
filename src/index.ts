import {init} from 'twa-bridge';

const bridge = init({debug: true});
(window as any).bridge = bridge;
