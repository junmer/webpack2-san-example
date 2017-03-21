import {msg} from './config';
import hello from './hello';

new hello({
    data: {
        msg: msg
    }
})
.attach(document.body);
