import {createSelector} from 'reselect';


const selectLoginForm = state => state.LoginFormOpen;

export const selectLoginFormOpen = createSelector(
    [selectLoginForm],
    checkLoginForm => checkLoginForm.isLoginFormOpen
);


export const selectToggleLoginForm = createSelector(
    [selectLoginForm],
    toggleForm => toggleForm.toggleLoginForm
)