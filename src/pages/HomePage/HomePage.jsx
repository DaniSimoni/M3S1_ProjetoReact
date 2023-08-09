import * as Styled from './HomePage.style';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';

export const HomePage = () => {

    const { setData } = useContext(HeaderContext)
    useEffect(() => {
      setData({       
        iconHeader: '../../../public/images/IconLogin.png' ,
        buttonHeader: 'Login' ,
    }) 
        
      }, []);
    return(

        <h1>Content Home Page chegando</h1>
    )
}