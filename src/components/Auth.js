import { useState } from 'react'
import { supabase } from './SupabaseClient'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

function Auth() {
    const [loading, setLoading] = useState(null)

    async function signInWithGitHub(){
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        },{
            redirectTo: 'https://hafiz-note.netlify.app/'
        })
    }

    return (
    <>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        height={'80vh'}
        >
            <Button variant="contained" onClick = { signInWithGitHub } >Login with Github</Button>
        </Grid>
    </>
    )
}

export default Auth