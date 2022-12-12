import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // const { budget } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    return (
        <div className='alert alert-secondary'>
            <span>Budget: $<input step='10' type='number' id='budget' value={budget} onChange={(event) => setBudget(event.target.value)}></input></span>
        </div>
    );
};

export default Budget;