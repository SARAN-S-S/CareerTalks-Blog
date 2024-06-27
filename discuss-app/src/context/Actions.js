
//Login
export const LoginStart = (userCredentails) => ({
    type: "LOGIN_START",
});


export const LoginSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});


//Logout
export const Logout = () => ({
    type: "LOGOUT",
});



//ProfilePicture update
export const UpdateStart = (userCredentails) => ({
    type: "UPDATE_START",
});


export const UpdateSuccess = (user) => ({
    type:"UPDATE_SUCCESS",
    payload: user,
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
});
