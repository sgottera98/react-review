import React, { useEffect, useState } from 'react';
import getCurrency from '../../services/currencies';

const Currencies = (props) => {
    const [currency, setCurrency] = useState('');

    useEffect(() => {
        getCurrency()
            .then((res) => {
                setCurrency(res.USDBRL);
            })
            .catch((err) => console.log(err));
    }, []);

    console.log(currency.ask);

    return (
        <>
            <h2 className="text-white font-bold text-center text-4xl mb-10">
                {currency.name}
            </h2>
            <span className="flex justify-center items-end text-white font-bold text-center">
                <p className="text-3xl">
                    Compra:&nbsp;
                </p>
                <p className='text-4xl'>{currency.bid}</p>
            </span>
            <span className="flex justify-center items-end text-white font-bold text-center">
                <p className="text-3xl">
                    Venda:&nbsp;
                </p>
                <p className='text-4xl'>{currency.ask}</p>
            </span>
        </>
    );
};

export default Currencies;
