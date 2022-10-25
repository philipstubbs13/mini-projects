import { createClient } from '@supabase/supabase-js';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const supabase = createClient(
    "https://pmuiijkqkwirdoaoqvii.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdWlpamtxa3dpcmRvYW9xdmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2NjQ0ODksImV4cCI6MTk4MjI0MDQ4OX0.qLINGwJumNZIOSydZwH3Om3ux-hJ0ZJil2BtgDhEjyc"
)

function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                // value.data.user
                if (value.data?.user) {
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <div className="App">
            <header className="App-header">
                {Object.keys(user).length !== 0 ? (
                    <>
                        <h1>Success</h1>
                        <button onClick={() => signOutUser()}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <h1>User is not logged in</h1>
                        <button onClick={() => { navigate("/")}}>Go back home!</button>
                    </>
                )}
            </header>
        </div>
    );
}

export default Success;
