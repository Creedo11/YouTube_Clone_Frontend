import React from "react";
import { Paper, TextField } from '@material-ui/core';

const SearchBar = (props) => {
    return ( 
        <Paper elevation={6} style={{ padding: '25px' }}>
            <form>
                <TextField fullWidth label="Search..."></TextField>
            </form>
        </Paper>
     );
}
 
export default SearchBar;