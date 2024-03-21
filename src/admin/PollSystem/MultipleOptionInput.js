import React, { useState } from 'react';

function MultipleOptionInput() {
    const [selectedValues, setSelectedValues] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addValue();
        }
    };

    const addValue = () => {
        if (inputValue.trim() !== '' && !selectedValues.includes(inputValue)) {
            setSelectedValues([...selectedValues, inputValue]);
            setInputValue('');
        }
    };

    const removeValue = (valueToRemove) => {
        setSelectedValues(selectedValues.filter(value => value !== valueToRemove));
    };

    return (
        <div>
            <label htmlFor="values">Select Multiple Otions:</label>
            <input
                type="text"
                id="values"
                placeholder='Press Enter to Add value'
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleInputKeyPress}
            />
            <div>
                {selectedValues.map((value, index) => (
                    <button
                        key={index}
                        className={`btn ${selectedValues.includes(value) ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => removeValue(value)}
                    >
                        {value}
                        <span>&times;</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default MultipleOptionInput;
