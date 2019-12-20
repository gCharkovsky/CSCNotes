import React from "react";
import './Note.css'
import NoteForm from "../../noteForm/NoteForm";

export default class Note extends React.Component {
    state = {
        color: "#CCCCCC",
        title: "Invisible text",
        text: "If you can see it, something gone wrong. Please close this page and never open it again.",
        editing: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = {color: props.color, title: props.title, text: props.text};
    }

    startEditing(e) {
        e.preventDefault();
        this.setState({editing: true})

    }

    stopEditing(e) {
        e.preventDefault();
        console.log(e.data);
        switch (e.target.operation) {
            case "Delete":{
                this.setState({editing:false});
                break;
            }
            case "Cancel":{
                this.setState({editing:false});
                e.preventDefault();
                break;
            }
            case "Send":{
                this.setState({editing:false});
                break;
            }
            default: break;
        }
        //this.setState({editing: false})
    }

    render() {
        if (!this.state.editing)
            return <article onClick={(e) => this.startEditing(e)} className="note-card"
                            style={{borderColor: this.state.color}}>
                <h3>{this.state.title}</h3>
                <p className="note-card_text">{this.state.text}</p>
            </article>;
        else
            return <div onClick={(e) => this.stopEditing(e)}>
                <NoteForm color={this.state.color} title={this.state.title}
                          text={this.state.text} editing={this.state.editing}/>
            </div>

    }
}
