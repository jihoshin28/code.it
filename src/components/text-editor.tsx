import { useEffect, useState, useRef } from 'react'
import MDEditor from '@uiw/react-md-editor'
import './text-editor.css'

const TextEditor: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState('# Header')
    useEffect(() => {
        const listener = (event:MouseEvent) => {
            if(ref.current && event.target && ref.current.contains(event.target as Node)){
                console.log('inside edit element')
                return
            }
            console.log('outside edit element')
            setEditing(false)
        }
        document.addEventListener('click', listener, {capture: true})

        return () => {
            document.removeEventListener('click', listener, { capture: true })
        }
    })

    if(editing){
        return (
            <div className = "text-editor" ref = {ref}>
                <MDEditor value = {value} onChange = {(value) => setValue(value || '')} />
            </div>
        )
    }
    return (
        <div className = "text-editor card">
            <div className = "card-content" onClick = {() => setEditing(true)}>
                <MDEditor.Markdown source = {value}/>
            </div>

        </div>

    )
    
}

export default TextEditor