import nodemailer from 'nodemailer';
import { encode, decode } from './hashcode';
import { durationICS } from './datetime';
// import ics from 'ics'
const ics = require('ics')


export function sharemeeting (subject, email, uid, passwordRoom, type) {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAILGATEWAY,
            port: 25,
            secure: false,
            tls: {
                rejectUnauthorized: false
            }
        })
        let checkPasswordRoom = ''
        let meettype = ''
        type == true ? meettype = "การประชุมลับ" : meettype = "การประชุมปกติ" 
        if (passwordRoom === '123roominet!') {
        checkPasswordRoom = ''
        } else {
        checkPasswordRoom = `<br><b> Password: ${passwordRoom}</b><br>`
        }
        const mailOptions = {
            from: '"oneconference@inet.co.th" <oneconference@inet.co.th>',
            // from: 'oneconference.inet.co.th', // sender
            to: email, // list of receivers
            subject: 'Join to conference', // Mail subject
            html:
                '<b>Click the link below to join meeting Oneconference.</b><br><br><br>' +
                `<b>Meeting Subject: ${subject}</b><br>` +
                `<b>Meeting Type: ${meettype}</b><br>` +
                `<a href="${process.env.JOINHOST}/join/?uuid=${uid}" class="btn btn-primary">${process.env.JOINHOST}/join/?uuid=${uid}</a><br>` +
                `${checkPasswordRoom}` +
                '<br><br><b>Thank you,</b><br><b>One Conference</b>' // HTML body
        }
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(info)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export function calendar (email, ics, url, mail_subject, type) {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAILGATEWAY,
            port: 25,
            secure: false,
            tls: {
                rejectUnauthorized: false
            }
        })
        let meettype = ''
        type == true ? meettype = "การประชุมลับ" : meettype = "การประชุมปกติ" 
        const mailOptions = {
            from: '"oneconference@inet.co.th" <oneconference@inet.co.th>',
            // from: 'oneconference.inet.co.th', // sender
            to: email, // list of receivers
            subject: mail_subject, // Mail subject
            html:
                '<b>Click the link below to calendar meeting oneconference.</b><br><br><br>' +
                `<b>Meeting topic: ${url[2]}</b><br><br>` +
                `<b>Meeting Type: ${meettype}</b><br>` +
                `<a href='${url[0]}'>${url[0]}</a><br><br>` + `<b> Password: ${url[1]}</b>`,
            // attachments : [content],
            icalEvent: {
                filename: 'invitation.ics',
                method: 'request',
                content: ics
            }
        }
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(info)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export function cancel_meeting (name, email, date, start, end) {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAILGATEWAY,
            port: 25,
            secure: false,
            tls: {
                rejectUnauthorized: false
            }
        })
        const mailOptions = {
            from: '"oneconference@inet.co.th" <oneconference@inet.co.th>',
            // from: 'oneconference.inet.co.th', // sender
            to: email, // list of receivers
            subject: 'Cancel Schedule Meeting.', // Mail subject
            html:
                '<b>The schedule meeting this room has been cancelled.</b><br><br><br>' +
                `<b>Meeting Name: ${name}</b><br>` +
                `<b>Meeting Details: Date ${date} From ${start} to ${end}</b><br>` +
                '<br><br><b>Thank you,</b><br><b>One Conference</b>' // HTML body
        }
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(info)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

function inviteCalendar(data){
    const event = {
        start: data.datetime,
        // end: data.endtime,
        duration: data.duration,
        title: data.title,
        description: data.description,
        location: data.location,
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        method: 'REQUEST',
    }
    let create =  ics.createEvent(event, (error, value) => {
    if (error) {
        console.log(error)
        return error
    }
    return value
    })
    return create
}

export function createICS(startdate, starttime, enddate, endtime, title, description, password){
    const dateformat = startdate.split("/"),
    endformat = enddate.split("/"),
    starttimeform = starttime.split(":"),
    endtimeform = endtime.split(":"),
    day =  parseInt(dateformat[0].trim()),
    month = parseInt(dateformat[1].trim()),
    year = parseInt(dateformat[2].trim()),
    eday =  parseInt(endformat[0].trim()),
    emonth = parseInt(endformat[1].trim()),
    eyear = parseInt(endformat[2].trim()),
    hour = parseInt(starttimeform[0].trim()),
    min = parseInt(starttimeform[1].trim()),
    ehour = parseInt(endtimeform[0].trim()),
    emin = parseInt(endtimeform[1].trim()),
    dt1 = new Date(dateformat[2].trim(), dateformat[1].trim(), dateformat[0].trim(), starttimeform[0].trim(), starttimeform[1].trim()), // 1995, 11, 17, 3, 24, 0
    dt2 = new Date(endformat[2].trim(), endformat[1].trim(), endformat[0].trim(), endtimeform[0].trim(), endtimeform[1].trim())
    let diff =(dt2.getTime() - dt1.getTime()) / 1000
    diff /= 60
    let diffMin = Math.abs(Math.round(diff)), //22:00 - 00:00 = 120min
    keyroom = password === '' ? '' : 'password: ' + password
    console.log(55555555, [year, month, day, hour, min, eyear, emonth, eday, ehour, emin]);
    const data = {
        datetime: [year, month, day, hour, min],
        // endtime: [eyear, emonth, eday, ehour, emin],
        duration: durationICS(diffMin), // { hours: 1, minutes: 30 }
        title: title,
        description: description+'\n'+ keyroom,
        location: 'นัดประชุมผ่าน OneConference'
    },
    calendar = inviteCalendar(data)
    console.log(9988888, calendar);
    return calendar
}