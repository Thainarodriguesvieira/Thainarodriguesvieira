import React from "react"
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled"
import logo3 from "../../assets/logo3.jpg"
import { Button } from "@material-ui/core"
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom"
import { goToSignUp } from "../../routes/Coordinator"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"

const LoginPage = ({setRightButtonText}) => {
    useUnProtectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo3} />
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin={"normal"}
                >
                    Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>

    )
}

export default LoginPage