import * as C from "./App.styles"
import { useEffect, useState } from "react";
import { Item } from "./types/Item";
import { AreaInput } from "./components/InputItem/Input.index";
import { ListItem } from "./components/ListItem/List.index";

const App = () => {

   const [it, setIt] = useState<Item[]>([
    { id: 1, text: "Create a Task List with TypeScript", done: true },
    { id: 1, text: "Post the project on GitHub", done: false }
   ])

   const statusChanged = (checked: boolean, index: number) => {

    try{
      if(it)
      {
        it[index].done = checked;
        localStorage.setItem("tasks",JSON.stringify(it));
        setIt([...it]);
      }
    }
    catch(e){
      console.log("Error Changing of the Task Status...", e)
    }
   }

   const AddTask = (Name: string) => {

    try{
      console.log("Adding a new Task...")

      let ListToAdd : Item[] = [];
      if(it) {
        ListToAdd = [...it];
      }
      ListToAdd.push({
        id: it ? it.length + 1 : 0,
        text: Name,
        done: false
      })
      localStorage.setItem("tasks", JSON.stringify(ListToAdd));
      setIt(ListToAdd);
    }
    catch(e){
      console.log("Error Adding of the Task...", e)
    }
  }

   const RmTask = (index: number) => {

    try{
      console.log("Removing the Task...")
                                                
      let ListToRm : Item[] = [];
      if(it) {
        ListToRm = [...it];
      }
    
      ListToRm.splice(index,1);     
      localStorage.setItem("tasks", JSON.stringify(ListToRm));
      setIt(ListToRm);
    }
    catch(e){
      console.log("Error Removing the Task...", e)
    }
  }

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem("tasks");
    if(itemsFromStorage) {
      const savedTasks : Item[] = JSON.parse(itemsFromStorage);
      setIt([...savedTasks]);
    }
  },[])


  useEffect( () => {
    console.log("[Use Effect Log] ->", it);
  },[it])

  return(
    <C.Content>
      <C.AreaPrincipal>
        <C.Title>
            Task List
        </C.Title>
 
        <AreaInput Enter={AddTask}/>

          {
            it ? it.map((item, index) => (
              <ListItem key={index} item={item} index={index} 
              onDone={(checked) => {statusChanged(checked, index)}}
              Remove={(index) => {RmTask(index)}
            }/>
            )) : <></>
          }    
      </C.AreaPrincipal>
    </C.Content>

  );
}

export default App;