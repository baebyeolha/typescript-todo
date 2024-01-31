import React, { useState, useEffect } from 'react';

export type Text={
    title: string |undefined,
    color: string
}

export type ITodoitem={
    todo: Text,
    remove: () => void,
    update: (Updatetodo:string|undefined) => void,
}

type update = string




export default function TodoItem({todo, remove, update}: ITodoitem){

    const[mode, setMode] = useState<update>('normal')
    const[inputText, setInputText] = useState<update>()

    useEffect(()=>{
        setInputText(todo.title)
    }, [todo])

    function updatetext(uptitle:string|undefined){
        setInputText(todo.title = uptitle)
    }

   

    

    return(

        <div style={{backgroundColor:todo.color}}>

        {mode==='update' ? <input value={inputText} type="text" onChange={e => setInputText(e.target.value)}/>:
         mode==='normal' ? todo.title :
        null
        }

        <button onClick={(e)=>remove()}>삭제</button>
        <button onClick ={(e)=> {
            if (mode ==='normal'){
                setMode('update');
            } else{
                updatetext(inputText)
                setMode('normal');}
            }}>수정</button>

    </div>

    )
    
}