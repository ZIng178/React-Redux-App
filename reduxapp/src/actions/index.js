import axios from "axios"
export const GET_DATA="GET_DATA";
export const SET_ERROR="SET_ERROR";

export const getData=()=> dispatch=>{
     dispatch({type:GET_DATA});
    axios
    .get("https://api.rawg.io/api/games")
    .then(res=>{
        console.log(res)
        dispatch({type:GET_DATA, payload :res.data})
    })
    .catch(err=>{
        dispatch({type:SET_ERROR, payload :"error" })
    })

}