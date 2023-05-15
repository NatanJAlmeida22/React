import React from 'react';

const App = () => {
  <React.StrictMode></React.StrictMode>;
  const produtos = [
    {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "fc3766"]
    }
  ]
  return (
    <section>
      {produtos}
    </section>
  );
};

export default App;
