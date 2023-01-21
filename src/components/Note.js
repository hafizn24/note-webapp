import Paper from '@mui/material/Paper'
import { Button, TextField, Grid } from '@mui/material'
import { useState } from 'react'
import { supabase } from './SupabaseClient'

function Note({ note, session, id}) {
    const [text, setText] = useState(note)
    const [edit, setEdit] = useState(true)
    const handleChange = (event) => { setText(event.target.value) }

    function enableEdit(){
        setEdit(false)
    }
    async function updateNote(){
        setEdit(true)
        const { data, error } = await supabase
        .from('noteDB')
        .update({ note: text })
        .eq('id', id)
    }
    async function deleteNote(){
        const { data, error } = await supabase
        .from('noteDB')
        .delete()
        .eq('id', id)
        window.location.reload(false)
    }
    

    return (
        <>
            <Paper sx={{margin:2, padding:2, border:0, width:'90vw' }}>
                <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                >
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        defaultValue={text}
                        onChange={handleChange}
                        InputProps={{ readOnly: edit }}
                        variant="standard"
                        sx={{margin:2, width:'70vw'}}
                    />
                    <div>{!edit? <Button variant="contained" onClick = { updateNote } >Update</Button> : 
                        <>
                            <Button variant="contained" sx={{m:0.4}} onClick = { deleteNote } color="error" >Delete</Button>
                            <Button variant="contained" sx={{m:0.4}} onClick = { enableEdit } >Edit</Button>
                        </>
                    }</div>
                </Grid>
            </Paper>
        </>
    )
}

export default Note