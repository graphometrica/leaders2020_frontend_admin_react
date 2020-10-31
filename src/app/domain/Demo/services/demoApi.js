import axios from 'axios';
import  appConfig from '@appConfig'

const endpoint = appConfig.ENV().demoApiEndpoint;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const demoApi = {    
    getAll: async () => {        
        await sleep(1000);
        const res = await axios.get(`${endpoint}/get-all`);
        return res;        
    },

    addNew: async () => {        
        const res = await axios.get(`${endpoint}/add-new`);
        return res;        
    },

    removeLast: async () => {        
        const res = await axios.get(`${endpoint}/remove-last`);
        return res;        
    }
}

export {demoApi}