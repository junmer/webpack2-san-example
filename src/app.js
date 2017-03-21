import {msg} from './config';
import hello from './hello';


let app = new hello({
    data: {
        msg: msg
    }
});

app.attach(document.body);
