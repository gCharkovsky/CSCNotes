doAjax = function (url, type, data, success) {
    if ($.cookie('token')) {
        data = 'token=' + $.cookie('token') + '&' + data;
    }
    return $.ajax({
        url: url,
        type: type,
        dataType: 'json',
        data: data,
        xhrFields: {withCredentials: true},
        success: success,
    });
};

var xhr = new XMLHttpRequest();
const URL = 'http://127.0.0.1:5000/';

function get_notes(from, to) {
    xhr.open("POST", URL + 'notes', false);
    let str = 'frompos=' + from + '&topos=' + to
    console.log(str);
    xhr.send(from + ' ' + to);
    if (xhr.status !== 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        return JSON.parse(xhr.responseText); // responseText -- текст ответа.
    }
}

function get_number_of_notes() {
    xhr.open("GET", URL + 'note_count', false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}