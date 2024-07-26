export function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event.target.name);
    }

    function handleImgClick(event) {
        if (event.target.tagName === "IMG") {
            console.log(event.target.src);
        } else {
            console.log(event.target.name);
        }
    }

    return (
        <div>
            <button name="one" onClick={handleButtonClick}>Bottone</button>
            <button name="two" onClick={handleImgClick}><img width={20} height={20} src="vite.svg"/>Botttwo</button>
        </div>
    )
}