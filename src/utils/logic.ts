export const objEmpty = (obj: any): boolean => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}
