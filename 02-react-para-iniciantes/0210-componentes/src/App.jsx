import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const Teste = () => {
  const active = false;

  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

function App() {
  return (
    <div>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
