import React from 'react';
import ReactDOM from 'react-dom/client';
const nombre = 'Diego';
const JXS = <h1>Hola {nombre}!</h1>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    {JXS}
    </div>
    
  </React.StrictMode>
);


