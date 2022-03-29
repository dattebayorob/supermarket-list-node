const deserialize = <T = any>(json: string) => {
    try {
        const parsed = JSON.parse(json);
        return parsed as T;
    }catch(ex: any) {
        return null;
    }
}
const serialize = (obj: any) => {
    return JSON.stringify(obj);
}
export default { 
    deserialize, 
    serialize
}