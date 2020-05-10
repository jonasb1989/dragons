import axios from "axios";

const BASE_PATH = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/';

 
export const saveDragon = dragonObject => {
    try {
        return axios.post(`${BASE_PATH}/dragon`, dragonObject);
    } catch (error) {
        throw error;    
    }
};

export const updateDragon = (id, dragonObject) => {
    try {
        return axios.put(`${BASE_PATH}/dragon/${id}`, dragonObject);
    } catch (error) {
        throw error;
    }
};

export const getDragons = () => {
    try {
        return axios.get(`${BASE_PATH}/dragon`);
    } catch (error) {
        throw error;    
    }
};

export const getDragonDetail = id => {
    try {
        return axios.get(`${BASE_PATH}/dragon/${id}`);
    } catch (error) {
        throw error; 
    }
};

export const deleteDragon = id => {
    try {
        return axios.delete(`${BASE_PATH}/dragon/${id}`);
    } catch (error) {
        throw error;    
    }
};
