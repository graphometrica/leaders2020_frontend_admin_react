const mapUniversal = (payload) => {
    if (!payload || !payload._embedded) return null;
    //console.log('sssss', payload._embedded);
    let key = Object.keys(payload._embedded)[0];


    
        
    let entities = payload._embedded[key].map(i=>{
        
        let id = i._links.self.href;
        let parts = id.split('/');
    
        id = parts[parts.length-1];
        return {...i, id: id}
    })

    return entities;
}

export { mapUniversal}