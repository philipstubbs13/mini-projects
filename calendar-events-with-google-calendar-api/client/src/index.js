import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient(
  "https://bhkknegiomglrprozvta.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa2tuZWdpb21nbHJwcm96dnRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzMDkxMzMsImV4cCI6MTk4Nzg4NTEzM30.K6noZTrFjvb78_ceEV0_lPz194WQaEjIQHKCaBMPTgI"
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App /> 
    </SessionContextProvider>
  </React.StrictMode>
);
