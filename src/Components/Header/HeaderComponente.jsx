import * as Styled from './HeaderComponent.styled'

import React, { useContext } from 'react';
import { HeaderContext } from '../../Context/Header.context';

import Logo from '../../../public/images/Logo.png'
/* import IconLogin from '../../../public/images/IconLogin.png' */

export const HeaderComponent = () => {

    const { data } = useContext(HeaderContext)

    return(
        <Styled.HeaderContainer>
            <Styled.LogoImg src={Logo}></Styled.LogoImg>

            <Styled.NavBarHeader>
            
            <Styled.SectionButtonHeader>

                <Styled.ButtonHeader>Quem somos?</Styled.ButtonHeader>

                <Styled.ButtonHeader>Contato</Styled.ButtonHeader>

                <Styled.ButtonHeader id='buttonHeader'>
                    {data.buttonHeader}
                
                    <Styled.IconHeader id='iconHeader' src={data.iconHeader}/> 
                
                </Styled.ButtonHeader>

            </Styled.SectionButtonHeader>
            

            </Styled.NavBarHeader>
        </Styled.HeaderContainer>
    )
}