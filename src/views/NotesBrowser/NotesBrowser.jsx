import React from "react";
import './NotesBrowser.css'
import Header from "../../ui/header/Header";
import Notes from "../../ui/notes/Notes";
import NoteForm from "../../ui/noteForm/NoteForm";

export default class NotesBrowser extends React.Component {
    constructor(props, context) {
        super(props, context);
        document.addEventListener("toggle-theme", () => {
            this.setState({darkTheme: !this.state.darkTheme});
            console.log("theme changed. Just believe me.")
        });
    }

    state = {
        darkTheme: true
    };


    render() {
        return <div className={"content"}>
            <Header/>
            <NoteForm editing={false}/>
            <Notes/>
        </div>
    }
}
