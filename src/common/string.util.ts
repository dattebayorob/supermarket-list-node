const emptyString = "";
const isEmpty = (str?: string | null) => !str || !str.trim();
const isNotEmpty = (str?: string | null) => !isEmpty(str);
export default {
    emptyString,
    isEmpty,
    isNotEmpty
}