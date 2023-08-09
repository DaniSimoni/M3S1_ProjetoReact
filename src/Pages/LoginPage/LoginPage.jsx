import { FormLoginComponent } from '../../Components/Form/FormLogin/FormLoginComponent.jsx';
import * as Styled from './LoginPage.style.jsx';

export const LoginPage = () => {
    return (
        <Styled.LoginPageContainer>
            <FormLoginComponent />
        </Styled.LoginPageContainer>
    )
}