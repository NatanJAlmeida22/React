import React from 'react';

function App() {
  <React.StrictMode></React.StrictMode>;
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);
  return <div style={{ height: '200vw' }}>Div</div>;
}

export default App;
