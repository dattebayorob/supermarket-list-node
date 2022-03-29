const emptyList = [];
const map = <T, U> (collection: T[], mapper: (value: T, index?: number) => U) => {
    if ( !collection ) return emptyList as U[];
    return collection.map(mapper);
}
const isEmpty = (collection?: any[] | null) => !!!collection?.length;
const isNotEmpty = (collection?: any[] | null) => !!collection?.length;

export default {
    emptyList,
    map,
    isEmpty,
    isNotEmpty
}