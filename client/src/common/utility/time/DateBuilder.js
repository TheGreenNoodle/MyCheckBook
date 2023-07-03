// used to get current date
const date = new Date();

// used to get the number of days in a month
const moment = require("moment");

// starts out on the current date as the default value
class DateBuilder {
  constructor(
    month = date.getMonth() + 1,
    day = date.getDate(),
    fullYear = date.getFullYear()
  ) {
    this.month = month;
    this.day = day;
    this.fullYear = fullYear;
    this.halfYear = fullYear.toString().slice(2);
    this.currDate = `${month}/${day}/${this.halfYear}`;
  }

  // reduce by 1
  decrementMonth() {
    this.month--;
  }
  decrementDay() {
    this.day--;
  }
  decrementYear() {
    this.fullYear--;
    this.halfYear = this.fullYear.toString().slice(2);
  }

  // set to end of year
  resetMonth() {
    this.month = 12;
  }

  // reset day to what ever the last day of what ever month it is
  setDayToEndOfMonth() {
    this.day = moment(
      `${this.fullYear}-${this.month}`,
      "YYYY-MM"
    ).daysInMonth();
  }
}

export { DateBuilder };
