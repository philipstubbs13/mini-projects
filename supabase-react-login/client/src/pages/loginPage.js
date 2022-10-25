import { createClient } from '@supabase/supabase-js';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
    "https://pmuiijkqkwirdoaoqvii.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdWlpamtxa3dpcmRvYW9xdmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2NjQ0ODksImV4cCI6MTk4MjI0MDQ4OX0.qLINGwJumNZIOSydZwH3Om3ux-hJ0ZJil2BtgDhEjyc"
)

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            // forward to success URL
            navigate("/success");
        } else {
            // forward to localhost:3000
            navigate("/");
        }
    })

    return (
        <div className="App">
            <header className="App-header">
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme="dark"
                    providers={["discord"]}
                />
            </header>
        </div>
    );
}

export default Login;
