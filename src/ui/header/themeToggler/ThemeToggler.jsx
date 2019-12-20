import React from "react";
import IconButton from "../../ui-kit/buttons/iconButton/IconButton";

export default class ThemeToggler extends React.Component {
    state = {
        dark: true
    };

    buttons = [<IconButton key={0} name={"DarkTheme"}/>, <IconButton key={1} name={"LightTheme"}/>];

    updateTheme(e) {
        e.preventDefault();
        this.setState({dark: !this.state.dark});
        console.log("trust me. theme changed")
    }

    render() {
        return <div onClick={(e) => this.updateTheme(e)}>
            {this.buttons[(this.state.dark ? 0 : 1)]}
        </div>
    }
};
