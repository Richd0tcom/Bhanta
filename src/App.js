import React from 'react';

import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './init-firebase.config';








function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <main className="">

        { user ? <Chat /> : <SignIn /> }
        
      </main>
      
    </div>
  );
}

export default App;
