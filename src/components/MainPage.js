// Main Page of this website
// Current problem with the website:
// 1. if the user is new user, the user need to press login button twice
import { supabase } from "./SupabaseClient"
import { useEffect, useState } from "react"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import SignOutButton from "./SignOutButton"

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Auth from "./Auth"
import Account from "./Account"

function MainPage() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })    
  }, [])

  return (
    <>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }} >
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
          <AppBar >
            <Toolbar>
              <h3 style={{fontFamily: "'Ubuntu', sans-serif"}}>Note</h3>
              {!session ? <></> : <SignOutButton />}
            </Toolbar>
          </AppBar>
          <Box sx={{ padding:'10%', border:0}}></Box>
          <>
            {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
          </>
        </Grid>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          height={'100vh'}
          >
            <h2 style={{fontFamily: "'Roboto Slab', serif"}}>This website only available in mobile-view only.</h2>
        </Grid>
      </Box>
    </>
  )
}

export default MainPage


{/* 
<div style = {{ display: variableName ? 'none': 'block' }} >
    <h1>Hello World</h1>
</div> 
*/}