import React, {useState} from "react";
import { Paper, TextField } from '@material-ui/core';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

   

    const handleSubmit = (event) => {
        event.preventDefault()
        props.getSearchResults(searchTerm)
    }

    {
    return ( 
        <Paper elevation={6} style={{ padding: '25px' }}>
            <form onSubmit={handleSubmit}>
                <TextField value={searchTerm} fullWidth label="Search..." onChange={(event) => setSearchTerm(event.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </Paper>
     );
}
}
 
export default SearchBar;