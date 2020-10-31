import {safeString} from './safeFunctions'

const stringLength = (value, doTrim) => {
    if (doTrim) {
        return safeString(value).trim().length;
    }    
    return safeString(value).length;
}

export {stringLength}