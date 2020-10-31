import {safeArray, safeString} from './safeFunctions'
import {stringLength} from './stringFunctions'

const findBySubstring = (value, filterValue) => {    
    if ( safeString(value).toLowerCase().indexOf(filterValue) >= 0 ) {
        return true;
    }
    return false;
}

const filterArrayByString = (data, filterValue, fields) => {    
    if (!Array.isArray(data)) return [];
    if (!data.length) return [];

    let result = [];
    
    if (stringLength(filterValue)) {
        filterValue = safeString(filterValue).toLowerCase();

        if (Array.isArray(fields) && fields.length) {
            
            result = data.filter(i=> {
                
                for (let index = 0; index < fields.length; index++) {
                    const field = fields[index];                    
                    const isFound = findBySubstring(i[field], filterValue);                    
                    if (isFound) return true;                    
                }
                return false;
            })
        }else {
            result = data.filter(i=> {
                if (typeof i === 'object' && i ) {
                    return findBySubstring(i, filterValue)
                }
                
                return false;
            })
        }
        
        return result
        
    }
    return data;
}

export {filterArrayByString}