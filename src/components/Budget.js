import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState(null);

    const handleBudgetChange = (event) => {
        const value = event.target.value;

        if (value <= 20000) {
            setNewBudget(value);
            setError(null);
        } else {
            setError("Budget cannot exceed £20,000");
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default Budget;
