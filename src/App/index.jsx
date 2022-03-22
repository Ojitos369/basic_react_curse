import React from 'react'
import { AppUI } from './AppUI'
import { TodoProvier } from '../TodoContext'

function App(props) {
  return (
    <TodoProvier>
      <AppUI />
    </TodoProvier>
  );
}

export default App;
