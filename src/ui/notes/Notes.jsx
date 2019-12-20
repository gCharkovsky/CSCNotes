import React from "react";
import Note from './note/Note'
import './Notes.css'

export default class Notes extends React.Component {
    notes_content = [{id: 0, color: "cyan", title:"First note", text:"Go away. Search that the development build is not optimized. To create a production build, use npm run build."},
        {id: 1,color: "black", title:"Second note", text:"Go away. Search that the development build is not optimized. To create a production build, use npm run build."},
        {id: 2,color: "red", title:"Third note", text:"Go away. Search that the development build is not optimized. To create a production build, use npm run build."},];

    notes = this.notes_content.map((content) => <Note key={content.id} color={content.color} title={content.title}
                                                      text={content.text}/>);

    getNotes = function(){

    };

    render() {
        return <section>{this.notes}</section>
    }
}
