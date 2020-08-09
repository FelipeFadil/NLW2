const subjects = [
    "Arts",
    "Biology",
    "Science",
    "Physical education",
    "Physics",
    "Geography",
    "History",
    "Math",
    "Portuguese",
    "Chemistry",
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minute] = time.split(':')
    return Number(hour * 60) + Number(minute)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}