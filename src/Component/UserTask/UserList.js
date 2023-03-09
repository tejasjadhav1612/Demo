import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';
import AddEditUser from './AddEditUser';
import Button from "@mui/material/Button";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClose = ()=>{
        setOpenDialog(false);
    }

    useEffect(()=>{
        axios
        .get("http://localhost:8080/users")
        .then((response)=>{
            setUsers(response.data);

        })
        .catch(console.log);
    });

    const columns = [
        {
            name:"id",
            label:"ID",
            options:{
                sort:true,
                filter:false,
            },

        },
        {
            name:"mobile",
            label:"Mobile ",
            options:{
                sort:true,
                filter:false,
            },

        },
        {
            name:"email",
            label:"Email",
            options:{
                sort:true,
                filter:false,
            },

        },
        {
            name:"city",
            label:"City",
            options:{
                sort:true,
                filter:true,
            },

        },
        {
            name:"gender",
            label:"Gender",
            options:{
                sort:true,
                filter:true,
            },

        },
        
    ];

    const addUser = () =>{
        setOpenDialog(true);
    };
    return ( 
        <>
        <AddEditUser open={openDialog} handleClose={handleClose}/>
        <Button onClick={addUser}>New +</Button>
        <MUIDataTable title="User List" data={users} columns={columns}/>
        </>
     );
}
 
export default UserList;