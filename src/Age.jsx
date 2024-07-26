export function Age({ age, name }) {
    return (
        <>
            {age > 18 ? <p>You are an adult</p> : false}
            {!!age && <p>Your age is {age}</p>}
            {/* {Boolean(age) && <p>Your age is {age}</p>}  */}
            {age > 18 && age < 65 ? <p>You are not old</p> : false}
            {age > 18 && name == "John" ? <p>John is an adult</p> : false}
            {age == 0 && <p>You are really young!</p>}
        </>
    )
}