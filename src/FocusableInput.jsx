import { useEffect, useRef } from "react"

export function FocusableInput() {
    const inputRef = useRef(null)
    const mountedRef = useRef(false)

    useEffect(() => {
        if (!mountedRef.current) {
            console.log("First mount");
            mountedRef.current = true
        } else {
            console.log("Second mount for debug");
        }
        inputRef.current?.focus()
    }, [])

    return (
        <input ref={inputRef} type="text" />
    )
}