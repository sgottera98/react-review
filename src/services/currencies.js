import axios from 'axios';

const getCurrency = (code = 'USD', codeIn = 'BRL') => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://economia.awesomeapi.com.br/last/${code}-${codeIn}`)
            .then((res) => {
                res && resolve(res.data);
            })
            .catch((err) => reject(err));
    });
};

export default getCurrency;
