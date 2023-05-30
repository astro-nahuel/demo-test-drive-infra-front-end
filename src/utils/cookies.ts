import nookies from 'nookies'

export const getCookie = (name: string) => {
    const cookie = nookies.get(null, name)
    return cookie[name]
}

export const setCookie = (name: string, value: string, options?: any) => {
    const cookie = getCookie(name)
    if (cookie) {
        nookies.destroy(null, name)
    }
    nookies.set(null, name, value, options)
}

export const destroyCookie = (name: string) => {
    nookies.destroy(null, name)
}
