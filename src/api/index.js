import axios from "axios";

const BASE_PATH = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/';


const saveDragon = dragonObject => {
    try {
        return axios.post(`${BASE_PATH}/dragon`, dragonObject);
    } catch(error) {
        throw error;    
    }
}

const getDragons = () => {
    try {
        return axios.get(`${BASE_PATH}/dragon`);
    } catch(error) {
        throw error;    
    }
};

const deleteDragon = id => {
    try {
        return axios.delete(`${BASE_PATH}/dragon/${id}`);
    } catch(error) {
        throw error;    
    }
}

export { getDragons, deleteDragon, saveDragon };
