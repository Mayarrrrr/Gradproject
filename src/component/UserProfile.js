import { useState } from 'react';
import Group from './Group';
import { months } from './tools';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

    return <div>
        <Group>
            <h2>Name:</h2> {stored.name}
        </Group>
        <Group>
            <h2>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <button
                style={{color: 'red'}}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}