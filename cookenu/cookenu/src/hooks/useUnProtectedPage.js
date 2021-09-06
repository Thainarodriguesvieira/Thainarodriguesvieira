import {useHistory} from "react-router-dom"
import {useLayoutEffect} from "react"
import { goToRecipesList } from "../routes/Coordinator"

const useUnProtectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(() =>{
        const token = localStorage.getItem('token')
        if (token){
            goToRecipesList(history)
        }
    }, [history])
}

export default useUnProtectedPage