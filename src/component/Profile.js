import { useState } from 'react';
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile';

const animals = [
    "Aardvark",
    "Albatross",
    "Alpaca",
    "Alligator",
    "Anchovie",
    "Angelfish",
    "Ant",
    "Antelope",
    "Armadillo",
    "Aurochs",
    "Axolotl"
]



function randomName() {
    return "Anonymous " + animals[Math.floor(Math.random() * animals.length)]
}


function Profile() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [name, setName] = useState(randomName());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());

    const stored = {name, month, day};
    const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.name);
            setMonth(result.month);
            setDay(result.day);
        }        
        setEditMode(false);
    }

    return (
        <div className="container">
            <div className="prof">                 
                {
                    editMode
                        ? <>
                            <h1>My Profile</h1>
                            <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                            {
                                isBirthdayToday
                                    ? <div className="birthday">Happy Birthday!</div>
                                    : <h1>My Profile</h1>
                            }
                            <UserProfile
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        </div>
    );
}

export default Profile;
