const MAX = 534;

function get_notes(from, to) {
    if (to > MAX)
        to = MAX;
    if (from<0)
        from = 0;
    //в теории тут запрос к серверу, а по факту хрен там плавал
    let notes = [];
    for (let i = from; i < to; i++) {
        if (i===MAX-1){
            notes.push({
                id: i,
                header: 'Assignment #' + (i+1) + '. The last of Us',
                text: "Это последняя заметка. Ура, товарищи!"
            })
        }else
            notes.push({
                id: i,
                header: 'Assignment #' + (i+1) + '. Infinity scroll',
                text: "Текст заметки, находящейся под номером " + (i+1) + ", которую типа сгенерировал сервер, а на самом деле она создается в соседнем файле. Почему бы и нет?))0)"
            })
    }
    return notes
}

function get_number_of_notes() {
    return MAX;
}