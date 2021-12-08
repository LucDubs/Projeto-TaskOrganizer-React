import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, leo sed volutpat dignissim
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;