import axios from "axios";


//inicial data
let initialData = {
    fetching:false,
    array:[],

}



// const 
let GET_CATEGORIES =  "GET_CATEGORIES";
let GET_CATEGORIES_SUCCESS =  "GET_CATEGORIES_SUCCES";
let GET_CATEGORIES_ERROR =  "GET_CATEGORIES_ERROR";





//reducer 
export default function reducer(state=initialData,action){
    switch(action.type){

        case GET_CATEGORIES:
            return {...state,fetching:true}
        case GET_CATEGORIES_SUCCESS:
            return {...state,array:action.payload,fetching:false}
        case GET_CATEGORIES_ERROR:
            return {...state,fetching:false,error:action.payload}
        
        default:
            return state;
    }
}


///actions 
export let getCategoriesAction = () => (dispatch,getState) => {
   
    dispatch({
        type:GET_CATEGORIES
    })

    return axios.get('/api/categories')
        .then(res=>{
            
            dispatch({
                type:GET_CATEGORIES_SUCCESS,
                payload:res.data
            })
        })
        .catch(err=>{
           
            dispatch({
                type:GET_CATEGORIES_ERROR,
                payload:"ERROR"
            })
        })
}


