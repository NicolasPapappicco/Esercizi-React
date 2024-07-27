import { useState } from "react"

export function TodoList() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleButtonClick(event) {
        const name = event.target.name;
        const id = event.target.id;

        switch (name) {
            case "add":
                setTodos((todo) => {
                    return [
                        ...todo,
                        inputValue
                    ]
                })
                setInputValue("")
                break;
            case "remove":
                setTodos(todos.filter((todo) => todo !== id));
                break;
            case "reset":
                setTodos([]);
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <>
                        <li key={index}>
                            {todo}
                            <button name="remove" id={todo} onClick={handleButtonClick}>Remove</button>
                        </li>
                    </>
                ))}
            </ul>
                <input name="input" type="text" value={inputValue} onChange={handleInputChange}/>
                <button name="add" onClick={handleButtonClick}>Add</button>
                <button name="reset" onClick={handleButtonClick}>Reset</button>
        </div>
    )
}