import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import getSlip from '../../services/api';

const Api = (props) => {
    const [phrase, setPhrase] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        getSlip()
            .then((res) => {
                setIndex(res.id)
                setPhrase(res.advice);
            })
            .catch((error) => console.log(error));
    }, []);

    console.log(index);
    return (
        <>
            <p className="text-white font-bold text-center text-4xl">
                "{phrase}" 🤙
            </p>
            <div className="flex justify-center gap-2 mt-10">
                <Button onClick={() => setIndex(index--)} >Prev</Button>
                <Button>Random</Button>
                <Button onClick={() => setIndex(index++)} >Next</Button>
            </div>
        </>
    );
};

export default Api;
