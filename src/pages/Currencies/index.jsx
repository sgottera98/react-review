
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Option from '../../components/Dropdown/option';
import Input from '../../components/Input';
import getCurrency from '../../services/currencies';

const Currencies = (props) => {
    const [currency, setCurrency] = useState('');

    useEffect(() => {
        getCurrency()
            .then((res) => {
                setCurrency(res);
            })
            .catch((err) => console.log(err));
    }, []);

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
            <br />
            <Dropdown>
                <Option>teste 1</Option>
                <Option>teste 1</Option>
                <Option>teste 1</Option>
            </Dropdown>
        </>
    );
};

export default Currencies;
