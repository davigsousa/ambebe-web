import React from 'react';
import 'react-responsive-modal/styles.css';
import './App.css';

function App({ children }) {
  return <main className="app-content">{children}</main>;
}

export default App;

export const MEDIA = '@media only screen and (max-width: 900px)';
