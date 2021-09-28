import axios from "axios";

//inicial data
let initialData = {
    fetching:false,
    array:[],

}



// const 
let GET_PRODUCTS =  "GET_PRODUCTS";
let GET_PRODUCTS_SUCCESS =  "GET_PRODUCTS_SUCCES";
let GET_PRODUCTS_ERROR =  "GET_PRODUCTS_ERROR";





//reducer 
export default function reducer(state=initialData,action){
    switch(action.type){

        case GET_PRODUCTS:
            return {...state,fetching:true}
        case GET_PRODUCTS_SUCCESS:
            return {...state,array:action.payload,fetching:false}
        case GET_PRODUCTS_ERROR:
            return {...state,fetching:false,error:action.payload}
        
        default:
            return state;
    }
}


///actions 
export let getProductsAction = () => (dispatch,getState) => {
   
    dispatch({
        type:GET_PRODUCTS
    })

    return axios.get('/api/products')
        .then(res=>{
            
            dispatch({
                type:GET_PRODUCTS_SUCCESS,
                payload:res.data
            })
        })
        .catch(err=>{
           
            dispatch({
                type:GET_PRODUCTS_ERROR,
                payload:"ERROR"
            })
        })
}


