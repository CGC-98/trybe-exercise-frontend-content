import React from 'react';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];

class Content extends React.Component {
  render() {
    return (
      <main>
        <ul>
          {conteudos.map(({ nome, bloco, status }, index) => {
            const format = `Eu ${status} o conteúdo ${nome} no bloco ${bloco}`;
            return <li key={ index }>{format}</li>;
          })}
        </ul>
      </main>
    );
  }
}

export default Content;
