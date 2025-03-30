
/**
 * Componentes são functions que retornam HTML de uma parte do app de forma reutilizavel.
 * Declarados em PascalCase
 * 
*/

import Heading from './components/Heading/Heading';

import './styles/theme.css'
import './styles/global.css'

function App() {
  return (
    <> {/*React Fragments para compor os elementos filhos sem declarar uma div*/}

     {/*Declarando props e valores das childrens*/}
     {/*Childrens são elementos ou componentes filhos*/}
      <Heading attr1='teste1' attr2='teste2'>Heading</Heading>
      <h1>Hello Friend</h1>
    </>
  );
}

export default App;
