const path = require("path");
const UPLOAD_DIR = path.resolve(__dirname, "./data/upload");

const getMockData = (url) => {
    let result = {
        ok: false
    };
    try {
        const file = path.resolve(__dirname, `./data/mocks/${url}.json`);
        result.data = require(file);        
        result.ok = true;
    }catch(err) {
        //console.log(err)
    }

    return result;     
}
module.exports = {
    getMockData
}