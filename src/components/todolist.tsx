import React from 'react'
import TodoItem from './todo';
import { Text } from './todo';
import { ITodoitem } from './todo';

type ITodoList = ITodoitem[];

interface TodoListProps {
    todoList: ITodoList;
    onDelete: (id: number) => void;
}

export default function Todolist({ todoList, onDelete }: TodoListProps){
    return (
      <div>
        {todoList.map((item, index) => (
          <TodoItem key={index} todo={item.todo} remove={()=>{onDelete(index)}} update={()=>{}} />
        ))}
      </div>
    )
}


  
  
  