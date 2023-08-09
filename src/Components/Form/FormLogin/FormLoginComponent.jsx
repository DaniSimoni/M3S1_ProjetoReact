import * as Styled from './FormLoginComponent.style';

export const FormLoginComponent = () => {
    return (
        <Styled.Form>
            <Styled.FormHeader>
                <h1>Login</h1>
            </Styled.FormHeader>
            <Styled.InputBox>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu email" />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" />
                </div>

            </Styled.InputBox>
            
            <Styled.Button type="submit" $active={true}>Entrar</Styled.Button>
            
            <Styled.LinkBox>
                <p>Não tem uma conta? <Styled.CriarConta>Cadastre-se</Styled.CriarConta></p>
            </Styled.LinkBox>
        </Styled.Form>
    )
}