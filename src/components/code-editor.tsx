import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import { useRef } from 'react';
import './code-editor.css'

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();
  //runs anytime monaco editor first mounts
  const onEditorDidMount: EditorDidMount = (getValue, MonacoEditor) => {
    editorRef.current = MonacoEditor;
    //detect anytime code in editor changes, using library's getValue function
    MonacoEditor.onDidChangeModelContent(() => {
      let value = getValue();
      onChange(value);
    });
  };

  const onFormatClick = () => {
    //get current value from editor
    const unformatted = editorRef.current.getModel().getValue();

    // format the value
    const formatted = prettier.format(unformatted, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true,
    }).replace(/\n$/, '')

    //set the formatted value back in the editor
    editorRef.current.setValue(formatted);
  };

  return (
    <div className = "editor-wrapper">
      {/* button for formatting */}
      <button className = "button button-format is-primary is-small" onClick={onFormatClick}>Format</button>
      {/* Monaco editor with options */}
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 14,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
        theme="dark"
        language="javascript"
        height="500px"
      />
    </div>
  );
};

export default CodeEditor;
