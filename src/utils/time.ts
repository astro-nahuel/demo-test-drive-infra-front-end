export const formatHourHHMM = (hour: string) => {
    //if hour is less than 10, add a 0 in front of it
    let hourFormatted = hour
    if (hour.split(':')[0].length < 2) {
        hourFormatted = `0${hour}`
    }
    return hourFormatted.split(':').slice(0, 2).join(':')
}

export const formatDateDDMMYYYY = (date: string) => {
    return date.split('-').reverse().join('/')
}

export const dateBeforeToday = (date: string) => {
    const today = new Date()
    const dateToVerify = new Date(date)
    return dateToVerify.getTime() < today.getTime()
}

export const getFullHour = (hour: Date) => {
    // if hours is less than 10, add a 0 in front of it
    let hourFormatted: string | number = hour.getHours()
    if (hour.getHours() < 10) {
        hourFormatted = `0${hour.getHours()}`
    }
    //if minutes is less than 10, add a 0 in front of it
    let minutesFormatted: string | number = hour.getMinutes()
    if (hour.getMinutes() < 10) {
        minutesFormatted = `0${hour.getMinutes()}`
    }
    return `${hourFormatted}:${minutesFormatted}`
}
