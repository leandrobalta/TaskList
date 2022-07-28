import * as C from "./styles"
import { Item } from "../../types/Item"
import {useState} from "react"
import { FiTrash2  } from "react-icons/fi"

type ListProps = {
    item: Item
    index: number
    onDone: (checked: boolean) => void
    Remove: (index: number) => void
}

export const ListItem = (props: ListProps) => {

    const [Checked, setChecked] = useState(props.item.done);

    return(
    <C.Content done={Checked}>
        <input 
        type="checkbox" 
        name="isDo"
        checked={Checked}
        onChange ={(evt) => {
            setChecked(evt.target.checked)
            props.onDone(evt.target.checked);
        }}
         />
        <label>{props.item.text}</label>

        <button onClick={() => {
            props.Remove(props.index) 
            }}>
            <FiTrash2 size={15} color= "#000"/>
        </button>
        
    </C.Content>
    );    
}
