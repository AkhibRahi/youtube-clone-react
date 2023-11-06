import React, { useState } from "react";

function Search(props) {

    const [searchTerm, setSearchTerm] = useState('');

    const updateSearch = (event) =>{
        setSearchTerm(event.target.value)
    }
    const submitBtn = (event) =>{
        event.preventDefault();
        props.onSearchClick(searchTerm);
    }

    return (
        <div>
            <form>
            <input onChange={updateSearch} type="text" size="40" placeholder="Search Anything" style={{
                padding: "5px 25px",
                margin: "30px 20px"
            }}></input>
            <button onClick={submitBtn} style={{padding: "5px 20px"}}>Search</button>
            </form>
        </div>
    )

}
export default Search;