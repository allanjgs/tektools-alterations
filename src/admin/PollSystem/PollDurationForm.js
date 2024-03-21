import React, { useState } from 'react';

function PollDurationForm() {
    const [durationValue, setDurationValue] = useState('');
    const [durationUnit, setDurationUnit] = useState('minutes');

    const handleDurationChange = (event) => {
        const value = event.target.value;
        setDurationValue(value);
    };

    const handleUnitChange = (event) => {
        const unit = event.target.value;
        setDurationUnit(unit);
    };

    const handleSubmit = () => {
        // Here you can call your API with the selected durationValue and durationUnit
        // After submitting, clear the fields
        setDurationValue('');
        setDurationUnit('minutes');
    };

    return (
        <div>
            <label htmlFor="duration">Poll Duration:</label>
            <input
                type="number"
                id="duration"
                value={durationValue}
                onChange={handleDurationChange}
                min="1"
            />

            <label>
                <input
                    type="radio"
                    value="minutes"
                    checked={durationUnit === 'minutes'}
                    onChange={handleUnitChange}
                />
                Minutes
            </label>

            <label>
                <input
                    type="radio"
                    value="hours"
                    checked={durationUnit === 'hours'}
                    onChange={handleUnitChange}
                />
                Hours
            </label>

            <label>
                <input
                    type="radio"
                    value="days"
                    checked={durationUnit === 'days'}
                    onChange={handleUnitChange}
                />
                Days
            </label>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default PollDurationForm;
