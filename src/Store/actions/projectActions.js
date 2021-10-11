


export const createProject=(project)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore= getFirestore();
        const profile=getState().firebase.profile;

        firestore.collection('Projects').add({
            ...project,
            FirstName:profile.firstName,
            LastName:profile.lastName,




        })
        .then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        });
       
    }
};