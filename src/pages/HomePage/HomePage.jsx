import * as Styled from './HomePage.style';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';

export const HomePage = () => {

    const { setData } = useContext(HeaderContext)
    useEffect(() => {
      setData({       
        iconHeader: '../../../public/images/userIcon.png',
        buttonHeader: 'Olá, Nome' ,
    }) 
        
      }, []);
    return(

      <></>
    )
}