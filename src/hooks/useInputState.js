import { useState } from "react";

export default initialVal => {
    const [value, setValue] = useState(initialVal);
    // create function to handle changes
    const handleChange = e => {
        setValue(e.target.value)
    }
    // create function to reset
    const reset = () => {
        setValue("")
    }
    // return
    return [value, handleChange, reset]
}