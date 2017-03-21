import dateNow from 'date-now';
import {format} from './helper';
import hello from './hello';


let app = new hello({
    data: {
        msg: format(dateNow(), 'Y-m-d')
    }
});

app.attach(document.body);

