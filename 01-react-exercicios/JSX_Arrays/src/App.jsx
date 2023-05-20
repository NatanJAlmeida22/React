// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500

// eslint-disable-next-line no-unused-vars
import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  }
];

const App = () => {
  return (
    <section>
      {produtos.filter((valor) => Number(valor.preco.replace('R$', '')) > 1500).map((item) => 
        <div key={item.id}>
          <h1 key={item.nome}>{item.nome}</h1>
          <p key={item.preco}>Preço: {item.preco}</p>
          <ul>
            {item.cores.map((cor) => 
              <li key={cor} style={{backgroundColor: cor, color: 'white'}}>{cor}</li>
            )}
          </ul>
        </div>
      )}
    </section>
  );
};

export default App;
