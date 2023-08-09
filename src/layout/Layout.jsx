import { Outlet } from "react-router-dom";
import * as Styled from './Layout.style';
import { HeaderComponent } from "../Components/Header/HeaderComponente";


export const Layout = () => {

const render = () => {

    return(
        
        <Styled.App>


            <Styled.MainLayout>

                <Styled.HeaderLayout>
                <HeaderComponent/>
                </Styled.HeaderLayout>

                <Styled.Content>
                    Conteudo
                <Outlet />
                </Styled.Content>

            </Styled.MainLayout>
            
     
        
        </Styled.App>
    )
}
    return render()
}