import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MyForm } from "./MyForm";
import { MyList } from "./MyList";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";


export function App() {
    return (
        <div className="welcome">
            <Welcome name="Nicolas" age={22} />
            <Counter/>
            <Login/>
        </div>
    )
}