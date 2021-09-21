


export const createProject=(project)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore= getFirestore();

        firestore.collection('Projects').add({
            ...project,
            FirstName:"Ron",
            LastName:'Rohtas',




        })
        .then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        });
       
    }
};