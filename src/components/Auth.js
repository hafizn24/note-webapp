import { useState } from 'react'
import { supabase } from './SupabaseClient'
import { GoMarkGithub } from 'react-icons/go'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

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
        height={'65vh'}
        >
            
            <Box sx={{ padding:'5%', border:0}}><GoMarkGithub size={100} style={{color: '#F7F7F7'}}/></Box>
            <Button variant="contained" onClick = { signInWithGitHub } style={{fontFamily: "'Ubuntu', sans-serif"}} sx={{px:2}}>Connect with Github</Button>
        </Grid>
    </>
    )
}

export default Auth