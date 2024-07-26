import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MyForm } from "./MyForm";


export function App() {
    return (
        <div>
            <MyForm/>
            <InteractiveWelcome/>
            <Login/>
        </div>
    )
}