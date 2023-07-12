import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'


const TaskListComponent = () => {

    const defaultTask = new Task('Send email', 'default description', false, LEVELS.NORMAL);
    //Estado del componente
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);




    //Control de LifeCycle component
    useEffect(() => {
        console.log("Task state has been modified")
        setLoading(false);
        return () => {
            console.log("Tasklist component is going to unmount")
        };
    }, [tasks]);
    
    const changeCompleted = (id) => {
        console.log('Cambiar estado de tarea');
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>

            <TaskComponent task={ defaultTask }></TaskComponent>
            
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
