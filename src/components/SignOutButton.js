import { supabase } from "./SupabaseClient"
import { useState, useEffect } from 'react'

import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import PersonIcon from '@mui/icons-material/Person'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

function SignOutButton() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        // window.location.reload(false)
        window.location.href = '/'
    }

    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    position: 'absolute',
                    top: '15%',
                    right: '3%', 
                }}
            >
                <Avatar sx={{ bgcolor: 'F2E7D5' }}><PersonIcon/></Avatar>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
                <MenuItem onClick={signOut}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default SignOutButton