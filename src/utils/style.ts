export const firstLetterUpperCase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const truncateText = (str: string, maxLength: number): string => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str
}

export const stringAvatar = (name?: string) => {
    if (!name) {
        return ''
    }
    const nameSplitted = name.split(' ')
    if (nameSplitted.length > 1) {
        return nameSplitted[0].charAt(0) + nameSplitted[1].charAt(0)
    } else {
        return nameSplitted[0].charAt(0)
    }
}
