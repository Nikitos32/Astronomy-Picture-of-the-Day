import {useRef} from "react";

export default function SearchSection({inputDate, setInputDate, setDate}) {
    const input = useRef();

    return (
        <section>
            <form>
                <input
                    ref={input}
                    max={new Date().toISOString().split('T')[0]}
                    min={"2015-01-01"} type="date"
                    value={inputDate}
                    onChange={(event) => {
                        setInputDate(event.target.value)
                    }
                    }/>
                <button onClick={(event) => {
                    event.preventDefault();
                    setDate(input.current.value)
                }
                }>Показать</button>
            </form>
        </section>
    )
}