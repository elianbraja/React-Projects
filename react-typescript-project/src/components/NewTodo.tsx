import React, {useContext, useRef} from "react";
import classes from "./NewTodo.module.css";
import {TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const todosCtx = useContext(TodosContext)
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        // perdor ? sepse Typescript mendon se vlera mund te mos jete bere set.
        // dhe mund te jete string apo undefined

        // const enteredText = todoTextInputRef.current?.value

        // perdor ! nese je i sigurt qe  vlera nuk mund te jete undefined
        // kjo te ndihmin qe me poshte vleen ta trajtosh si gjithmone me
        // vlere dhe Typescript te mos japi error

        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            // throw error
            return;
        }

        todosCtx.addTodo(enteredText)
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo