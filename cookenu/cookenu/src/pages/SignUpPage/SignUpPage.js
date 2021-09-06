import React from "react"
import logo3 from "../../assets/logo3.jpg"
import { ScreenContainer } from "./styled"
import SignUpForm from "./SignUpForm"
import { LogoImage } from "./styled"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"

const SignUpPage = ({setRightButtonText}) => {
    useUnProtectedPage()
    return(
        <ScreenContainer>
            <LogoImage src={logo3}/>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default SignUpPage