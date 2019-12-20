import React from "react";
import ColorItem from "./ColorItem";
import './ColorPicker.css'

export default class ColorPicker extends React.Component {
    state = {
        collapsed: true,
        color: "gray"
    };
    defaultColors = ["teal", "maroon", "green", "navy"];

    constructor(props, context) {
        super(props, context);
        this.state = {
            collapsed: true,
            color: props.color
        };
    }

    updateColor(event){
        if (event.target.className === "color-picker"){
            event.preventDefault();
            return;
        }
        let chosenColor = event.target.style.backgroundColor;
        if(chosenColor === this.state.color){
            this.setState({collapsed: !this.state.collapsed});
        } else {
            this.setState({collapsed: true, color: chosenColor});
        }
        event.preventDefault();
    };

    render() {
        const colorItems = !this.state.collapsed ? this.defaultColors.map((color) => <ColorItem key={color} color={color}/>) : null;
        return <div className={"color-picker"} onClick={(e) => this.updateColor(e)}>
            <ColorItem color={this.state.color} />
            {colorItems}
        </div>
    }
}
