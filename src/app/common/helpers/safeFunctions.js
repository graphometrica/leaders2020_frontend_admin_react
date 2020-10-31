const safeString = (value) => {    
    if (value === undefined || value === null) return '';    
    if (typeof value === 'number') return value.toString();
    if (typeof value === 'object') return JSON.stringify(value) || '';
    if (typeof value === 'string') return value;
    return '';
}

const safeArray = (value) => {
    if (Array.isArray(value)) return value;        
    return [];
}

const safeObject = (value) => {
    if (value === undefined || value === null) return {};
    if (typeof value === 'object') return value;
    return {};
}

export {safeString, safeArray, safeObject}