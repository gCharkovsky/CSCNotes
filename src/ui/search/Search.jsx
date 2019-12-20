import React from "react";
import './Search.css'
import IconButton from "../ui-kit/buttons/iconButton/IconButton";
import Input from "../ui-kit/input/Input";
import {ReactComponent as ClearIcon} from "../../assets/Icons/clear.svg"

export default class Search extends React.Component {
    state = {
        collapsed: true
    };

    toggleSearch(e) {
        this.setState({collapsed: !this.state.collapsed});
        console.log("toggle search");
        e.preventDefault();
    }

    render() {
        return <form className={"search"} onSubmit={(e)=>this.toggleSearch(e)}>
            <IconButton name={"Search"}/>
            {this.state.collapsed ? "": <Input placeholder={"Start typing..."}/>}
            {this.state.collapsed ? "":
            <button type="reset" className="clear-btn">
                <ClearIcon/>
            </button>
            }

        </form>
    }
}
