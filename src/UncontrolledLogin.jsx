export function UncontrolledLogin() {
    function onLogin() {
        const input = document.querySelectorAll("input")
        input.forEach((data) => data.type === "checkbox" ? console.log(data.checked) : console.log(data.value))
    }

    function handleFormSubmit(event) {
        event.preventDefault()

        const username = event.target.elements.namedItem("username").value
        const password = event.target.elements.namedItem("password").value
        const session = event.target.elements.namedItem("session").checked

        const data = {
            username,
            password,
            session
        }

        console.log(data);
    }

    function loginWithFormData(event) {
        const form = document.querySelector("form")
        const formData = new FormData(form)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") === "on" ? true : false
        }

        console.log(data);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input name="username"/>
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button onClick={onLogin}>Login</button>
            <button onClick={loginWithFormData}>FormData</button>
        </form>
    )
}