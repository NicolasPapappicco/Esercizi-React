import { Color } from "./Color";

export function Colors({ array }) {
    return (
        <ul>
            {array.map((array) => (
                <Color key={array.id} color={array}/>
            ))}
        </ul>
    )
}