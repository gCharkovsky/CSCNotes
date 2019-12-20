import React from 'react';
import './styles/reset.css';
import './styles/basic_theme.css';
import './styles/themes/dark.css';
import NotesBrowser from "./views/NotesBrowser/NotesBrowser";




function App() {
    return (
        <div className="App">
            <NotesBrowser/>
        </div>
    );
}

export default App;
