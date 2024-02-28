import { useState } from "react"

const Search = (props) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault()

        const searchTerm = value
        const result = props.countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
        if (result.length === 1){
            props.setCurrentCountry(result[0])
        }
        props.setCountriesToDisplay(result)
    }   

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <input onChange={handleChange} value={value}></input>
                <button>search</button>
            </form>
        </div>
    )
}

export default Search