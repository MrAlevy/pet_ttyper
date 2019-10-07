import React from 'react';
import './footer.scss';

export const Footer = () => { 
    const date = new Date();
    const year = date.getYear() + 1900;

    return (    
        <div className='footer'>
            <span>	
                2019{2019 !== year && '-' + year} &copy; 
                Aleksandr Vygodchikov 
                | 
                avygodchikov@gmail.com
            </span>
        </div>
    );
}