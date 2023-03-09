import React, { useState } from 'react';
const UserForm = () => {
    const [user, setUser] = useState({
        name:"",
        mobile:"",
        email:"",
        gender:"",
        city:"",
    });
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    };
    return (  );
}
 
export default UserForm;