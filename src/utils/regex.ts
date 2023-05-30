export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export const isEmail = (value: string) => emailRegex.test(value)

export const isPassword = (value: string) => pswRegex.test(value)

export const isEmpty = (value: string) => value === ''
