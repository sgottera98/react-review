import axios from 'axios';

const getSlip = (id = 1) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://api.adviceslip.com/advice/${id}`)
            .then((res) => {
                res && resolve(res.data.slip);
            })
            .catch((err) => reject(err));
    });
}

export default getSlip