import { useState, useEffect } from 'react'
import { supabase } from './SupabaseClient'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp'
import { Button } from '@mui/material'

import Note from './Note'

function NoteList({ session }) {
    const [note, setNote] = useState(null)
    const { user } = session

    useEffect(() => {
        try{
            async function fetchData(){
                let { data: noteDB, error } = await supabase
                .from('noteDB')
                .select('*')
                .eq('userID', user.id )

                setNote(noteDB) // noteDB[0]['note']
            }
            fetchData()
        }catch(error){ console.log(error) }
    },[session])

    async function createNote(){
        const { data, error } = await supabase
        .from('noteDB')
        .insert([
            { userID: user.id },
        ])
        window.location.reload(false)
    }

    return (
        <>
            {note ? 
            (<>{note.map(({id, note})=>(
                <Note key={id} note={note} session={session} id={id}/>))}
            </>) : 'Empty List'}
            <Button sx={{
                position: 'fixed',
                bottom: '3%',
                right: '3%', 
            }}
            onClick = { createNote }
            >
                <AddCircleSharpIcon sx={{ fontSize: 64 }} />
            </Button>
        </>
    )
}

export default NoteList