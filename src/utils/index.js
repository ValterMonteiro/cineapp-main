export const DateFormatPTBR = (date) => {
    let [year, month, day] = String(date).split('-')
    let dateObject = new Date(year, Number(month) - 1, day)

    let dateFormat = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Campo_Grande',
        month: "short",
        day: "2-digit",
    }).format(dateObject)
    return dateFormat.toUpperCase()
}