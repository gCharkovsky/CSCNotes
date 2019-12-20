import React from "react";
import './Input.css'

export default class Input extends React.Component {
    styling;
    constructor(props, context) {
        super(props, context);
        if(props.isHeader)
            this.styling = {fontFamily: "var(--h-text-family)", fontSize: "125%", fontWeight: "var(--h-text-weight)", color:"var(--header-text-color)", }
    }

    render() {
        return <input style={this.styling} placeholder={this.props.placeholder}  className="input"/>;
    }
}
