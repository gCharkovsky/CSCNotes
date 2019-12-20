import React from "react";
import './Header.css'
import IconButton from "../ui-kit/buttons/iconButton/IconButton";
import Search from "../search/Search";
import ThemeToggler from "./themeToggler/ThemeToggler";
import {ReactComponent as Logo} from "../../assets/Icons/logo.svg";


export default class Header extends React.Component {
    state = {
        mobile: window.innerWidth < 480
    };

    constructor(props, context) {
        super(props, context);
        window.addEventListener('resize', () => this.setState({mobile: window.innerWidth < 480}));
    }

    render() {
        return <header className="header">
            <a href="/" className="logo">
                {!this.state.mobile ? <Logo/> : <IconButton name={"Logo"}/>}
                {!this.state.mobile ? <h1>Notes</h1> : ""}
            </a>
            <div className="header-controls">
                <ThemeToggler/>
                <Search/>
                <IconButton name={"Menu"}/>
            </div>
        </header>
    }
}






