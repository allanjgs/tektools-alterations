import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Tab1.module.css';
const TextEditor = () => (
    <Editor
      wrapperClassName="demo-wrapper"
      style={{background: "#242424"}}
      editorClassName="demo-editor"
      localization={{
        locale: 'ko',
      }}
    />
  );

  export default TextEditor;