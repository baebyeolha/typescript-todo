import React, { useState } from 'react';
import Todolist from './todolist';
import { Text } from './todo';
import { ITodoitem } from './todo';

interface ColorMapElement{
    color: string
}

const COLORMAP: ColorMapElement[] = [
    { color: "#FAC8C8" },
    { color: "#FFF978" },
    { color: "#D2E1FF" },
    { color: "#C3E7FA" }
];

type title = string
type color = string



export default function TodoApp() {
  const [inputText, setInputText] = useState<title>('');
  const [activeColor, setActiveColor] = useState<color>('')
  const [todoList, setTodoList] = useState<ITodoitem[]>([]);

  function newtodo(todo: ITodoitem){
    setTodoList(prev=>[...prev,todo])
  }
  
  function deleteTodo(id: number){
    setTodoList(prev => prev.filter((item, index) => index !== id));
  };

  
  
  return (
    <div className="todo-app">
      <div>
        <div>TodoApp</div>
      </div>
      
      <div>
        <input type="text" value={inputText} style={{backgroundColor: activeColor}} onChange={e => setInputText(e.target.value)} />
        <button onClick={() => {
            const item: ITodoitem = {
                todo: {
                    title: inputText,
                    color: activeColor
                },
                remove: () => {},
                update: () => {}
            };
            newtodo(item);
        }}>입력</button>
      </div>

      <div style={{display: 'flex', flexDirection:'row', justifyContent:'center', gap:10}}>
        {COLORMAP.map((elem: ColorMapElement, index: number) => {
            return (
                <div key={index} style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor: elem.color}} onClick={() => setActiveColor(elem.color)}></div>
            );
        })}    
      </div>
      
      <div>
        <Todolist todoList={todoList} onDelete={deleteTodo} />
      </div>
    </div>
  );
}
