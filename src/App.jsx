import { Colors } from "./Colors";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MyForm } from "./MyForm";
import { MyList } from "./MyList";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";


export function App() {
    return (
        <div>
            <Colors
                array={[
                    {id: 1, name: "Blue"},
                    {id: 2, name: "Red"},
                    {id: 3, name: "Yellow"},
                    {id: 4, name: "Green"},
                ]}
            />
            <TodoList/>
            <Login/>
        </div>
    )
}