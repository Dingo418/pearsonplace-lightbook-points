const cohort_id = prompt("Class id: ")
let cohorts = await fetch("https://api.lightbook.pearsonplaces.com.au/cohorts/" + cohort_id + "/users", {
    "headers": {
        "accept": "application/vnd.api+json; version=3.0",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
    },
    "referrer": "https://lightbook.pearsonplaces.com.au/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
});

if (cohorts.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    var a = await cohorts.json();
} else {
    alert("HTTP-Error: " + response.status);
}

for (let i = 0; i < a.data.length; i++) {
    console.log("[" + i + "] " + a.data[i].attributes['first-name']);
}

const id = parseInt(prompt("What person do you want to add points to?"));
const amount = parseInt(prompt("How many points do you want to add? (in 10s, max 2000)"));
console.log(amount/10);
for (let i = 0; i < (amount/10); i++) {
    console.log("Added");
    fetch("https://api.lightbook.pearsonplaces.com.au/Gamification/RecordEarningPointsBadges?route=earningPoints", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://lightbook.pearsonplaces.com.au/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "studentId=" + a.data[id].id + "&classId="+cohort_id+"&courseId=CH11_WA&type=Mastery&activityId=M8&points=10",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })};
