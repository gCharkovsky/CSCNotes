const PAGE_LIMIT = 100;
const PAGE_DEFAULT = 20;
const DOWNLOAD_COUNT = 20;
const CARD_PLACEHOLDER_HEIGHT = 150;
const WINDOW_HEIGHT = document.documentElement.clientHeight;
const TEMPLATE_HTML = '<h3><span>Assignment #0. Loading</span></h3>' +
    '<p class="note-card_text"><span>Если вы можете читать этот текст, значит что-то пошло не так или заметки все еще загружаются. Если данный текст не пропадает уже больше 5 минут, значит проблема на нашей стороне. Ну или у вас интернет отвалился.</span></p>';

let current_notes = get_notes(0, PAGE_DEFAULT);
let first = 0;
let last = PAGE_DEFAULT;
let note_list = document.getElementsByClassName('notes')[0];
let show_prefix_mocks = false;
let show_postfix_mocks = true;
let note_template;
let total_count_of_notes = get_number_of_notes();

for (let i = 0; i < Math.min(PAGE_DEFAULT + DOWNLOAD_COUNT, total_count_of_notes); i++) {
    note_template = document.createElement('article');
    note_template.innerHTML = TEMPLATE_HTML;
    note_template.className = 'notes__note-card notes__note-card_placeholder';
    note_list.append(note_template);
}
for (let i = 0; i < Math.min(PAGE_DEFAULT, total_count_of_notes); i++) {
    note_list.children[i].innerHTML = '<h3>' + current_notes[i].title + '</h3>\n' +
        '<p class="note-card_text">' + current_notes[i].text + '</p>';
    note_list.children[i].className = 'notes__note-card notes__note-card_color_cyan';

}

function add_mocks_to_end(count) {
    for (let i = 0; i < count; i++) {
        let note_template = document.createElement('article');
        note_template.innerHTML = TEMPLATE_HTML;
        note_template.className = 'notes__note-card notes__note-card_placeholder';
        note_list.append(note_template);
    }
}

function add_mocks_to_begin(count) {
    for (let i = 0; i < count; i++) {
        let note_template = document.createElement('article');
        note_template.innerHTML = TEMPLATE_HTML;
        note_template.className = 'notes__note-card notes__note-card_placeholder';
        note_list.prepend(note_template);
    }
}

function remove_beginning(count) {
    for (let i = 0; i < count; i++)
        note_list.children[0].remove();
}

function remove_ending(count) {
    for (let i = 0; i < count; i++)
        note_list.children[note_list.children.length - 1].remove();
}

function mockify_beginning(count) {
    remove_beginning(count);
    add_mocks_to_begin(count);
}

function mockify_ending(count) {
    remove_ending(count);
    add_mocks_to_end(count);
}

function set_first_notes(notes) {
    let len = notes.length;
    for (let i = 0; i < len; i++) {
        note_list.children[i].innerHTML = '<h3>' + notes[i].title + '</h3>\n' +
            '<p class="note-card_text">' + notes[i].text + '</p>';
        note_list.children[i].className = 'notes__note-card notes__note-card_color_cyan';
    }
}

function set_last_notes(notes) {
    let len = notes.length;
    let total_len = note_list.children.length;
    for (let i = total_len - len; i < total_len; i++) {
        note_list.children[i].innerHTML = '<h3>' + notes[i - total_len + len].title + '</h3>\n' +
            '<p class="note-card_text">' + notes[i - total_len + len].text + '</p>';
        note_list.children[i].className = 'notes__note-card notes__note-card_color_cyan';

    }
}

function do_scroll_down() {
    console.log('scroll down');
    if (last === total_count_of_notes)
        return 'некуда крутить';
    else
        show_postfix_mocks = true;

    if (first > 0)
        show_prefix_mocks = true;


    last += DOWNLOAD_COUNT;
    last = Math.min(last, total_count_of_notes);

    if (last - first > PAGE_LIMIT) {
        first = Math.max(0, last - PAGE_LIMIT);
        if (show_prefix_mocks)
            remove_beginning(DOWNLOAD_COUNT);
        mockify_beginning(DOWNLOAD_COUNT);
        show_prefix_mocks = true;
    }

    let notes = get_notes(first, last);
    set_last_notes(notes);
    if (last < total_count_of_notes)
        add_mocks_to_end(Math.min(DOWNLOAD_COUNT, total_count_of_notes - last));
    else
        show_postfix_mocks = false;

    console.log('(' + first + ', ' + last + ')');

}

function do_scroll_up() {
    console.log('scroll up');
    if (first === 0)
        return 'некуда крутить';
    else
        show_prefix_mocks = true;

    if(last<total_count_of_notes)
        show_postfix_mocks = true;


    first -= DOWNLOAD_COUNT;
    first = Math.max(0, first);

    if (last - first > PAGE_LIMIT) {
        last = Math.min(first + PAGE_LIMIT, total_count_of_notes);
        if (show_postfix_mocks)
            remove_ending(DOWNLOAD_COUNT);
        mockify_ending(DOWNLOAD_COUNT);
    }
    let notes = get_notes(first, last);
    set_first_notes(notes);
    if (first > 0)
        add_mocks_to_begin(Math.min(DOWNLOAD_COUNT, first));
    else
        show_prefix_mocks = false;


    console.log('(' + first + ', ' + last + ')');
}

add_mocks_to_end();

window.addEventListener('scroll', function () {
    while ((document.documentElement.getBoundingClientRect().bottom - WINDOW_HEIGHT < CARD_PLACEHOLDER_HEIGHT * DOWNLOAD_COUNT) && show_postfix_mocks)
        do_scroll_down();
    while ((document.documentElement.getBoundingClientRect().top > -CARD_PLACEHOLDER_HEIGHT * DOWNLOAD_COUNT - 300) && show_prefix_mocks)
        do_scroll_up();

});