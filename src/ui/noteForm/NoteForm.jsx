import React from "react";
import './NoteForm.css'
import IconButton from "../ui-kit/buttons/iconButton/IconButton";
import Textarea from "../ui-kit/textarea/Textarea";
import ColorPicker from "../ui-kit/colorPicker/ColorPicker";

export default class NoteForm extends React.Component {
    state = {
        id: 0,
        title: "",
        text: "",
        color: "black",
        editing: false
    };


    constructor(props, context) {
        super(props, context);
        this.state = {id: props.id, color: props.color, title: props.title, text: props.text, editing: props.editing};

    }

    riseResult(e) {
        console.log("form passed");
        console.log(e.target);
        if(e.target === "Cancel" && !this.state.editing){
            this.setState({
                id: 0,
                title: "",
                text: "",
                color: "gray"});
            console.log("cleaned")
        }
        e.target = {operation: e.target, id: this.state.id};
        e.data = this.state;

    }

    render() {
        return <form action="" className="note-form"
                     onSubmit={(e) => e.preventDefault()}>
            <div className="note-form__input-block">
                <Textarea placeholder="Title" rows="1" isHeader={true} text={this.state.title}/>
                <Textarea placeholder="Take a note..." rows="3" text={this.state.text}/>
            </div>

            <div className="note-form__action-block">
                <ColorPicker color={this.state.color}/>
                <div className="action-block__controls"
                     onClick={(e) => this.riseResult(e)}>
                    {this.props.editing ? <IconButton name={"Delete"}/> : ""}
                    <IconButton name={"Cancel"} color_type={"secondary"}/>
                    <IconButton name={"Send"}/>
                </div>
            </div>
        </form>
    }
}
