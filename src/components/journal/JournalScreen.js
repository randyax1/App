import React from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from "../journal/Sidebar";
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {

    const {active} = useSelector(state => state.notes)

    return (
        <div className="journal__main-content">
            
            <Sidebar/>

            <main>

                {
                    (active)
                    ? (<NoteScreen/>)
                    : (<NothingSelected/>)
                }
             
            </main>

        </div>
    )
}
