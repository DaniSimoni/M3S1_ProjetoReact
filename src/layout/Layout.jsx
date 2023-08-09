import { Outlet } from "react-router-dom";
import * as Styled from './Layout.style';


export const Layout = () => {

const render = () => {

    return(
        
        <Styled.App>


            <Styled.MainLayout>

                <Styled.HeaderLayout>
                Layout Header
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