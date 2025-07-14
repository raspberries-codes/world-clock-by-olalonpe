function losAngelesElements() {
  let losAngelesCurrentDate = moment()
    .tz("America/Los_Angeles")
    .format("dddd MMMM Do, YYYY ");
  let losAngelesDate = document.querySelector("#los-Angeles-date");
  losAngelesDate.innerHTML = losAngelesCurrentDate;

  let losAngelesCurrentTime = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss");
  let los_AngelesTime = document.querySelector("#los-angeles-time");
  los_AngelesTime.innerHTML = losAngelesCurrentTime;

  let amElement = moment().tz("America/Los_Angeles").format(A);
  let los_AngelesAm = document.querySelector("#amElement");
  los_AngelesAm.innerHTML = amElement;
}
function parisElement() {
  let parisCurrentDate = moment()
    .tz("Europe/Paris")
    .format("dddd MMMM Do, YYYY ");
  let parisDate = document.querySelector("#parisDate");
  parisDate.innerHTML = parisCurrentDate;

  let parisCurrentTime = moment().tz("Europe/paris").format("hh:mm:ss");
  let parisTime = document.querySelector("#parisTime");
  parisTime.innerHTML = parisCurrentTime;

  let amElement = moment().tz("Europe/paris").format(A);
  let parisAm = document.querySelector("#paris-AmElement");
  parisAm.innerHTML = amElement;
}
function nigeriaElement() {
  let nigeriaCurrentDate = moment()
    .tz("Africa/Lagos")
    .format("dddd MMMM Do, YYYY ");
  let nigeriaDate = document.querySelector("#nigeriaDate");
  nigeriaDate.innerHTML = nigeriaCurrentDate;

  let nigeriaCurrentTime = moment().tz("Africa/Lagos").format("hh:mm:ss");
  let nigeriaTime = document.querySelector("#nigeriaTime");
  nigeriaTime.innerHTML = nigeriaCurrentTime;

  let amElement = moment().tz("Africa/Lagos").format(A);
  let nigeriaAm = document.querySelector("#nigeria-AmElement");
  nigeriaAm.innerHTML = amElement;
}

setInterval(losAngelesElements, 1000);
setInterval(parisElement, 1000);
setInterval(nigeriaElement, 1000);
