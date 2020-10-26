// Get Today's Day
let today = new Date();
let dayNumber = today.getDay();
let daysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayName = daysList[dayNumber];
console.log("Today is :", dayName);

const getTodayDayName = () => {
  return dayName;
};

// Get Current Time
let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let prepand = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === "PM") {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}
if (hour === 0 && prepand === "AM") {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}
const currentTime = hour + " " + prepand + ":" + minutes + ":" + seconds;
console.log("Current time is :", currentTime);

const getCurrentTime = () => {
  return currentTime;
};

// Format the Date
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}
const formats = ["mm-dd-yyyy", "mm/dd/yyyy", "dd-mm-yyyy", "dd/mm/yyyy"];

const formatDate = (format) => {
  let dateFormated;
  formats.map((format, index) => {
    switch (format) {
      case "mm-dd-yyyy":
        dateFormated = month + "-" + day + "-" + year;
        console.log("Date is: ", dateFormated);
        break;
      case "mm/dd/yyyy":
        dateFormated = month + "/" + day + "/" + year;
        console.log("Date is: ", dateFormated);
        break;
      case "dd-mm-yyyy":
        dateFormated = day + "-" + month + "-" + year;
        console.log("Date is: ", dateFormated);
        break;
      case "dd/mm/yyyy":
        dateFormated = day + "/" + month + "/" + year;
        console.log("Date is: ", dateFormated);
        break;
      default:
        dateFormated = "Invalid Format";
        console.log(dateFormated);
    }
  });
  return dateFormated;
};
formatDate("mm/dd/yyyy");
