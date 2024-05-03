import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

export const UserForm = ({ createUser, updateUser, editUser,setUpdateUser }) => {

    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
        if (updateUser) {
            reset(updateUser);
        }
    }, [updateUser]);
    

    const submit = data => {
        if(updateUser){
            editUser('users', data, updateUser.id);
            setUpdateUser();
        } else{
            createUser('users', data); 
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="first_name">First name</label>
                <input {...register('first_name')} id= 'first_name' type="text" />
            </div>
            <div>
                <label htmlFor="last_name">Last name</label>
                <input {...register('last_name')} id= 'last_name' type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id= 'email' type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input {...register('password')} id= 'password' type="password" />
            </div>
            <div>
                <label htmlFor="birthday">Birthday</label>
                <input {...register('birthday')} id= 'birthday' type="date" />
            </div>
            <button>submit</button>
        </form>
    </div>
  )
}

export default UserForm;
