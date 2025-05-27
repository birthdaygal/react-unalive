export function calculateTimeLeft(birthDate, lifeExpectancy) {
    const now = new Date()
    const birth = new Date(birthDate)
    const death = new Date(birthDate)
    death.setFullYear((birth.getFullYear() + parseInt(lifeExpectancy)))

    if (now >= death) {
        // console.log('You have surpassed the life expectancy')
        return {
            years: '-',
            months: '-',
            weeks: '-',
            days: '-',
            hours: '-',
            minutes: '-',
            seconds: '-'
        }
    }

    // Calculate remaining time to live
    const milliseconds = death - now
    const seconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)

    const years = death.getFullYear() - now.getFullYear()
    const months = Math.floor(years * 12)
    
    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
    }
}

export function getPercentage(birthDate, lifeExpectancy) {
    const now = new Date()
    const birth = new Date(birthDate)
    const age = now.getFullYear() - birth.getFullYear()

    const percentage = (age / parseInt(lifeExpectancy)) * 100
    return percentage.toFixed(1)
}