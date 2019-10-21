function getMonday(date) {
  var day = date.getDay() || 7;
  if (day !== 1) date.setHours(-24 * (day - 1));
  return date;
}
var monday = getMonday(new Date());
document.write(monday.toDateString());
document.getElementById("date").datetime = monday;
