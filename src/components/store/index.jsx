import { configureStore } from '@reduxjs/toolkit';
//reducers
import users from './slices/users';

export default configureStore({
    //reducer padre que recibe los reducers hijos del resto de los estados de la app;estado global
    reducer: {
        users //ya está agregado al estado global
    }
});