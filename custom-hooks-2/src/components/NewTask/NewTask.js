import {useState} from 'react';
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
    const {isLoading, error, sendRequest: sendTaskRequest} = useHttp()

    const createTask = (taskText, taskData) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = {id: generatedId, text: taskText};
        props.onAddTask(createdTask);
    }

    const enterTaskHandler = async (taskText) => {
        sendTaskRequest(
            {
                url: 'https://movies-rjs-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: {text: taskText}
            },

            //Po ta vesh re applyData tek custom hook kalon vetem 1 element nderkohe qe createTask kerkon 2
            // Mund ta zgjidhim kete duke perdorur bind. Bind te mundeson te pre-konfigurojme nje function.
            // Ajo nuk ekzekuton javascript direkt. Ajo eshte nje javascript function qe mund te perdoret
            // ne cdo function object per ta pre-konfiguruar ate funksion.
            // Parametri i pare eshte "this" keywork per funksionin qe do te ekzekutohet. NE kete rast nuk
            // na duhet.
            // Parametri i dyte eshte parametri i pare i funksionit.
            // Cdo parameter tjeter qe perfshihet ne momentin qe funksioni thirret, do behet append tek
            // lista e parametrave.
            // Pra applyData megjithse e therret funksionon me vetem 1 parameter, ne fakt kalon 2, dhe teskText
            // Ky eshte regular JavaScript
            createTask.bind(null, taskText)
        )
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading}/>
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
