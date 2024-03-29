import { useState, useEffect } from 'react';
import Group from './Group';
import { months } from './tools';

function renderMonthOptions() {
    return months.getMonths().map( (m, i) => {
        return <option
            key={i}
            value={i}
        >
            {m.shortName}
        </option>
    });
}

function bound(value, floor, ceil) {
    return Math.min(ceil, Math.max(value, floor));
}

export default function EditableUserProfile({
    stored,
    editCompleteCallback
}) {

    console.log("Edit User Profile");

    const [name, setName] = useState(stored.name);
    const [month, setMonth] = useState(stored.month);
    const [day, setDay] = useState(stored.day);
    const maxDay = months.getMaxDays(month);

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({name, month, day});
    }

    useEffect(() => {
        setDay(bound(day, 1, maxDay));
    }, [month]);


    return <>
        <Group>            
            <h2>Name:</h2>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />            
        </Group>
        <Group>            
            <h2>Birthday:</h2>            
            
            <select
                value={month}
                onChange={e => setMonth(bound(e.target.value, 0, 11))}
            >
                {renderMonthOptions()}
            </select>
            <input
                type='number'
                value={day}
                onChange={e => setDay(bound(e.target.value, 1, maxDay))}
                style={{width: "50px"}}
            />
        </Group>
        <Group>
            <button style={{color: 'red'}} onClick={handleSaveClicked}>Save</button>
            <button style={{color: 'black'}} onClick={handleCancelClicked}>Cancel</button>
        </Group>
    </>
}