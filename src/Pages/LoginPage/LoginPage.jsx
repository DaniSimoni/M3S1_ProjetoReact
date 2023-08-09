import { FormLoginComponent } from '../../Components/Form/FormLogin/FormLoginComponent.jsx';
import * as Styled from './LoginPage.style.jsx';

export const LoginPage = () => {
    return (
        <Styled.LoginPageContainer>
            <Styled.LoginCard>
                <Styled.ImageBox>
                    
                </Styled.ImageBox>

                <FormLoginComponent />
            </Styled.LoginCard>
        </Styled.LoginPageContainer>
    )
}