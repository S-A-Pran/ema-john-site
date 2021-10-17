import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import "./Inventory.css"

const Inventory = () => {
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Enter your name" defaultValue={user.displayName} {...register("name", { required: true })} />
            <input placeholder="Enter your email" defaultValue={user.email} {...register("email", { required: true })} />
            <input placeholder="Enter your City" {...register("city", { required: true })} />
            <input placeholder="Enter your Phone number" {...register("phone", { required: true })} />
            {(errors.email || errors.name || errors.city || errors.phone) && <span className="error">You can not left any input empty</span>}
            <input type="submit" />
        </form>
    );
};

export default Inventory;