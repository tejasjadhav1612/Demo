import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

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
    return ( 
        <>
        
        <MUIDataTable title="User List" data={users} columns={columns}/>
        </>
     );
}
 
export default UserList;