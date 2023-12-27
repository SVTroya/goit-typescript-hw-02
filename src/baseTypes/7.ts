/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
    MON,
    TEU,
    WED,
    THU,
    FRI,
    SAT,
    SUN
}

function isWeekend(day:DayOfWeek):boolean {
    return day === DayOfWeek.SAT || day === DayOfWeek.SUN
}
