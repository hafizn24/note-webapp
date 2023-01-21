import { useState, useEffect } from 'react'
import { supabase } from './SupabaseClient'

import NoteList from './NoteList'

function Account({ session }) {
    const [email, setEmail] = useState(null)
    const { user } = session

    useEffect(() => {
        async function checkUser(){
            try{
                let { data: userInfo, error } = await supabase
                .from('userInfo')
                .select('*')
                .eq('id', user.id)

                if(userInfo.length === 0){
                    createUser()
                }else{
                    setEmail(userInfo[0]['email'])
                }
            }catch(error){console.log(error)}
        }
        checkUser()
    },[session])

    async function createUser(){
        const { data, error } = await supabase
        .from('userInfo')
        .insert([
            { id:user.id , email: user.email },
        ])
        setEmail(user.email)
    }

    return(
        <>
            <NoteList key={session.user.id} session={session} />
        </>
    )
}

export default Account

// key={session.user.id} session={session}