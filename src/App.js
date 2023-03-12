import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <h1 className="text-center my-3">Todo-list</h1>
      <Form />
    </div>
  )
}

export default App;
