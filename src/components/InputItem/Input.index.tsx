import { MdPlaylistAdd } from "react-icons/md"
import * as C from "./styles";
import { useState, KeyboardEvent } from "react";

type Props = {
    Enter: (Name: string) => void
};

export const AreaInput = ({ Enter }: Props) => {
    const [Text, setText] = useState('');

    const Add = (e: KeyboardEvent) => { 

        try{
            if (Text !== '' && e.code === 'Enter'){
                Enter(Text);
                setText('');
            }
        }
        catch{
            alert('Error Adding a new Task')
            setText('');
            return;
        }    
    };

    return(
        <C.Content>      
            <button className="Button">
                <MdPlaylistAdd size={30} color="#000"/>
            </button> 
            
            <input
                type="text"
                placeholder="Add a Task..."    
                size={105}         
                value={Text}
                onChange= {evt => setText(evt.target.value)}
                onKeyUp={Add}
            />            
        </C.Content>
        
    ) 
};