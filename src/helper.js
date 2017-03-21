export const format = (time, format) => {

	time = (time instanceof Date) ? time : new Date(+time);

    if (format) {

        var o = {
            m: time.getMonth() + 1,
            d: time.getDate(),
            w: time.getDay(),
            H: time.getHours(),
            M: time.getMinutes(),
            S: time.getSeconds(),
            s: time.getMilliseconds()
        };

        if (/(Y)/.test(format)) {
            format = format.replace(RegExp.$1, (time.getFullYear() + ''));
        }
        for (var k in o) {
            if (o.hasOwnProperty(k) && new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
    }
    else {
        format = time.toDateString();
    }

    return format;
}

