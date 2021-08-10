let Input = (props) => {
    return (

        <div>
            <input
                className="input-box"
                type="text"

                onChange={(e) => {

                    props.onChangeHandler(e.currentTarget.value)

                }}

                value={props.value} 

                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        props.onKeyDownHandler()
                    }
                }}

            />
        </div>

    )
}

export default Input;