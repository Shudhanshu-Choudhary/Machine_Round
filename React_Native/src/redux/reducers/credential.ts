const initialState = {
    
};

const CredsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'UPDATE_CRED':{
            return {
                email: action.payload.email,
                password: action.payload.password,
            }
        }
            
        default:
            return state;
    }
} 

export default CredsReducer;

export const UpdateCredDetails = (data: any) => {
    return {
        type: 'UPDATE_CRED',
        payload: data
    }
}