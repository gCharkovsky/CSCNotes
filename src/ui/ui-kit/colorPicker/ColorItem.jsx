import React from "react";
import './ColorItem.css'

export default class ColorItem extends React.Component {
    raiseColorChoice(event) {
        event.color = this.props.color;
    }

    render() {
        return <div style={{backgroundColor:this.props.color}} className={"color-item"} onClick={(e) => this.raiseColorChoice(e)}/>
    }
}
