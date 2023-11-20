import {client} from "./ApiClientInstance";

function sendFeedback(data) {
    return client.post('/feedback', JSON.stringify(data))
}

export function sendFeedbackForm({client_name, phone, from_landing, description, city, tag}) {

    const ym_clientId = window['yaCounter95469611'].getClientID();

    const searchParams = new URLSearchParams(document.location.search)

    const utm_campaign = searchParams.get('utm_campaign');

    let samara_datetime_utc = new Date().toGMTString("ru-RU", { timeZone: "Europe/Samara" });
    const timeUnixValue = Math.floor(new Date(samara_datetime_utc) / 1000)

    return sendFeedback({
        clientName: client_name,
        phone: phone,
        description: description,
        city: city,
        tag: tag,
        fromLanding: from_landing,
        clientId: ym_clientId,
        campaignId: utm_campaign,
        timeUnix: timeUnixValue
    })
}