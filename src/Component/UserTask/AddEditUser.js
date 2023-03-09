import React from 'react';
import DialogTitle from "@mui/material/Dialog";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent"
import UserForm from './UserForm';
const AddEditUser = ({open, handleClose}) => {
    return ( 
        <>
        <Dialog open={open} onClose={handleClose}> 
            <DialogTitle>Add User</DialogTitle>
            <DialogContent>
                <UserForm/>
            </DialogContent>
        </Dialog>
        </>
     );
}
 
export default AddEditUser;