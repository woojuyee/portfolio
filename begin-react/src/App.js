// App.js
import React from 'react';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Profile />
            <Contact />
            <Skills />
        </div>
    );
}

export default App;
