function losAngelesElements() {
  let losAngelesCurrentDate = moment()
    .tz("America/Los_Angeles")
    .format("dddd MMMM Do, YYYY ");

  let losAngelesDate = document.querySelector("#los-Angeles-date");
  if (losAngelesDate) {
    losAngelesDate.innerHTML = losAngelesCurrentDate;
    let losAngelesCurrentTime = moment()
      .tz("America/Los_Angeles")
      .format("hh:mm:ss[<small>] A[</small>]");
    let los_AngelesTime = document.querySelector("#los-angeles-time");
    los_AngelesTime.innerHTML = losAngelesCurrentTime;
  }
}
function parisElement() {
  let parisCurrentDate = moment()
    .tz("Europe/Paris")
    .format("dddd MMMM Do, YYYY ");

  let parisDate = document.querySelector("#parisDate");
  if (parisDate) {
    parisDate.innerHTML = parisCurrentDate;
    let parisCurrentTime = moment()
      .tz("Europe/paris")
      .format("hh:mm:ss [<small>] A [</small>]");
    let parisTime = document.querySelector("#parisTime");
    parisTime.innerHTML = parisCurrentTime;
  }
}
function nigeriaElement() {
  let nigeriaCurrentDate = moment()
    .tz("Africa/Lagos")
    .format("dddd MMMM Do, YYYY ");

  let nigeriaDate = document.querySelector("#nigeriaDate");
  if (nigeriaDate) {
    nigeriaDate.innerHTML = nigeriaCurrentDate;
    let nigeriaCurrentTime = moment()
      .tz("Africa/Lagos")
      .format("hh:mm:ss[<small>] A[</small>]");
    let nigeriaTime = document.querySelector("#nigeriaTime");
    nigeriaTime.innerHTML = nigeriaCurrentTime;
  }
}

setInterval(losAngelesElements, 1000);
setInterval(parisElement, 1000);
setInterval(nigeriaElement, 1000);

function displayTime(event) {
  selectedTimeZone = event.target.value;
  if (selectedTimeZone === "current") {
    selectedTimeZone = moment.tz.guess();
  }
  let resultCity = selectedTimeZone.replace("_", " ").split("/")[1];
  let resultDate = moment().tz(selectedTimeZone).format("dddd MMMM Do, YYYY");
  let resultTime = moment()
    .tz(selectedTimeZone)
    .format("hh:mm:ss [<small>] A [</small>]");
  let result = document.querySelector("#TimeZoneDisplay");
  result.innerHTML = ` <div class="cityTime">
          <div class="city">
            <h2>${resultCity}</h2>
            <div class="date">${resultDate}</div>
          </div>
          <div class="time">${resultTime}
          </div>
        </div>
`;
}
let selection = document.querySelector("#selectElement");
selection.addEventListener("change", displayTime);
