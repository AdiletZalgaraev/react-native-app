import { createContext, useState } from "react"

export const UseContext = createContext()

export const UseProvider = ({ children }) => {

    const [note, setNote] = useState([])

    const Del = (id) =>{
        setNote(prev => prev.filter((i)=> i.id !== id))
    }

    const Add = (text) => {

        if(!text) return

        const newNote = {
            id:Date.now().toString(), 
            text
        }

        setNote(prev => [...prev, newNote])
    }

    return(



        <UseContext.Provider value={{ note, setNote, Add , Del }}>
            {children}
        </UseContext.Provider>
    )
}