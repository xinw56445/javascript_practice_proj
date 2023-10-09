// "use strict";
$(function () {

    let c = 0,
        t,
        timer_is_on = 0

    function setCount(param) {
        c = Number(param);
        c = c + 1;
        if (c < 10) {
            c = "0" + c;
        }
        return c;
    }

    function timedCount() {
        $('#millisecond').text(c);
        c = c + 1;
        if ($('#millisecond').text() == "100") {
            $('#second').text(setCount($('#second').text()));
            $('#millisecond').text("00");
            c = 0;
            if ($('#second').text() == "60") {
                $('#minute').text(setCount($('#minute').text()));
                $('#millisecond').text("00");
                $('#second').text("00");
                c = 0;
                if ($('#minute').text() == "60") {
                    $('#hour').text(setCount($('#hour').text()));
                    $('#minute').text("00");
                    $('#second').text("00");
                    $('#millisecond').text("00");
                    c = 0;
                }
            }
        }
        t = setTimeout(function () { timedCount() }, 10);
    }

    function doTimer() {
        if (!timer_is_on) {
            timer_is_on = 1;
            $('#status').text("started");
            timedCount();
        }
    }

    function stopCount() {
        clearTimeout(t);
        $('#status').text("paused");
        timer_is_on = 0;
    }

    function saveCount() {
        let h = Number($('#hour').text());
        let m = Number($('#minute').text());
        let s = Number($('#second').text());
        let ms = Number($('#millisecond').text());
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        let tt = h + ':' + m + ':' + s + '.' + ms;
        $('#last-time').text(tt);
        $('#hour').text("00");
        $('#minute').text("00");
        $('#second').text("00");
        $('#millisecond').text("00");
    }
    $("#start").on("click", () => doTimer());
    $("#pause").on("click", () => stopCount());
    $("#save").on("click", () => saveCount());
});