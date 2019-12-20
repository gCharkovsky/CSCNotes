import React from "react";
import './Textarea.css'

export default class Textarea extends React.Component {
    styling;
    state = {
        text: ""
    };

    constructor(props, context) {
        super(props, context);
        if (props.isHeader)
            this.styling = {
                fontFamily: "var(--h-text-family)",
                fontSize: "125%",
                fontWeight: "var(--h-text-weight)",
                color: "var(--header-text-color)",
            };
        this.state = {text: props.text};

    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return <textarea value={this.state.text} onChange={(e) => this.handleChange(e)} style={this.styling}
                         placeholder={this.props.placeholder} rows={this.props.rows} className="textarea"/>;
    }
}
