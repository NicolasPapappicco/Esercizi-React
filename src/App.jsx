import { Colors } from "./Colors";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MyForm } from "./MyForm";
import { MyList } from "./MyList";
import { UncontrolledLogin } from "./UncontrolledLogin";


export function App() {
    return (
        <div>
            <FocusableInput/>
            <MyList 
                items={[
                    {id: 1, name: "Jane", age: 33},
                    {id: 2, name: "Kate", age: 20},
                    {id: 3, name: "John", age: 53},
                    {id: 4, name: "Billy", age: 54},
                    {id: 5, name: "Jane", age: 32},
                ]}
            />
            <Colors
                array={[
                    {id: 1, name: "Blue"},
                    {id: 2, name: "Red"},
                    {id: 3, name: "Yellow"},
                    {id: 4, name: "Green"},
                ]}
            />
        </div>
    )
}