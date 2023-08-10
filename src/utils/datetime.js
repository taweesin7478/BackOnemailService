export function dateTimeFormatAndCalTime(days) {
  let d = new Date(),
    day = d.getDate(),
    month = d.getMonth() + 1,
    year = d.getFullYear(),
    hour = d.getHours(),
    min = d.getMinutes(),
    sec = d.getSeconds();
  let datestring =
    year +
    "-" +
    (month <= 9 ? "0" + month : month) +
    "-" +
    (day <= 9 ? "0" + day : day) +
    "T" +
    (hour <= 9 ? "0" + hour : hour) +
    "-" +
    (min <= 9 ? "0" + min : min) +
    "-" +
    (sec <= 9 ? "0" + sec : sec);
  let current_unix = new Date(Date(year, month - 1, day, hour, min, sec));

  let time = current_unix.getTime() + days * 86400000;

  let caldate = new Date(time);
  let cal_day = caldate.getDate(),
    cal_month = caldate.getMonth() + 1,
    cal_year = caldate.getFullYear(),
    cal_hour = caldate.getHours(),
    cal_min = caldate.getMinutes(),
    cal_sec = caldate.getSeconds();
  let nexttime =
    cal_year +
    "-" +
    (cal_month <= 9 ? "0" + cal_month : cal_month) +
    "-" +
    (cal_day <= 9 ? "0" + cal_day : cal_day) +
    "T" +
    (cal_hour <= 9 ? "0" + cal_hour : cal_hour) +
    "-" +
    (cal_min <= 9 ? "0" + cal_min : cal_min) +
    "-" +
    (cal_sec <= 9 ? "0" + cal_sec : cal_sec);
  return { current_date: datestring, next: nexttime };
}
export function expiretoken(expdate, check) {
  let date = new Date(0),
    exp = date.setUTCSeconds(expdate),
    exdateForm = new Date(exp),
    month = exdateForm.getMonth() + 1,
    day = exdateForm.getDate(),
    year = exdateForm.getFullYear(),
    hour = (exdateForm.getHours()),
    min = (exdateForm.getMinutes()),
    sec = (exdateForm.getSeconds())
    if (day < 10)
        day = '0' + day
    if (month < 10)
        month = '0' + month
    if (hour < 10)
        hour = '0' + hour
    if (min < 10)
        min = '0' + min
    if (sec < 10)
        sec = '0' + sec
    if (check === '')
      // 23-10-2020 16:54:14
        return `${day}-${month}-${year} ${hour}:${min}:${sec}`
    else
        return `${min} ${hour} ${day} ${month} *`
}

export function dateschedule (reqdate) {
    var today = new Date(reqdate)
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear()
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = dd + '/' + mm + '/' + yyyy
    return today
}

export function addminutes (date, time, duration) {
    let datesplit = date.split('-'),
        timesplit = time.split(':'),
        olddate = new Date(datesplit[0], datesplit[1], datesplit[2], timesplit[0], timesplit[1]),
        // convert_time = olddate.getTime() + duration * 60000
        min = new Date(olddate.getTime() + duration * 60000),
        hh = min.getHours(), mm = min.getMinutes()
    if (hh < 10) {
        hh = '0' + hh
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return hh + ':' + mm
}

export function date (reqdate) {
    var today = new Date(reqdate)
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear()
    if (dd < 10)
        dd = '0' + dd
    if (mm < 10)
        mm = '0' + mm
    today = dd + '/' + mm + '/' + yyyy
    return today
}

export function durationICS(diff){
    let num = diff,
    hours = (num / 60),
    rhours = Math.floor(hours),
    minutes = (hours - rhours) * 60,
    rminutes = Math.round(minutes)
    return { hours: rhours, minutes: rminutes }
}
