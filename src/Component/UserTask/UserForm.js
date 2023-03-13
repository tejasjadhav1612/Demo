import axios from 'axios';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useContext } from 'react';
import UserContext from './UserContext';
const UserForm = () => {
    const {loadUsers, handleClose} = useContext(UserContext);
    const [user, setUser] = useState({
        name: "",
        mobile: "",
        email: "",
        gender: "",
        city: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = () => {
        if (user.name && user.mobile) {
            axios
                .post("http://localhost:8080/users", user)
                .then((response) => {
                    alert("User created...");
                    loadUsers();
                    handleClose();
                })
                .catch((err) => {
                    console.log(err);
                    alert("could not created the user");
                });
        }
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label="Name"
                        fullWidth
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label="Mobile"
                        fullWidth
                        name="mobile"
                        value={user.mobile}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label="Email"
                        fullWidth
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label="City"
                        fullWidth
                        name="city"
                        value={user.city}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="gender"
                            value={user.gender}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' color='primary' onClick={handleSubmit}>Click</Button>
                </Grid>
            </Grid>
        </>
    );
}
export default UserForm;
