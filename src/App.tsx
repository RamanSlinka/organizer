import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
    return (
        <div className="App">
          <Todolist title="What tp learn"/>
          <Todolist title="Songs"/>
          <Todolist title = "Books"/>
        </div>
    );
}

export default App;
