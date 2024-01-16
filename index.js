/* Your Code Here */
/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour)
    });
    return this
  }
  
  function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour)
    });
    return this
  }
  
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find((e) => e.date === date);
    const timeOut = this.timeOutEvents.find((e) => e.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  
  
  function findEmployeeByFirstName(arr, firstName){
      return arr.find(employee => employee.firstName === firstName)
   }
  
  function calculatePayroll(employees) {
    return employees.reduce(
      (totalPayroll, employee) => totalPayroll + allWagesFor.call(employee),
      0
    );
  }
  
  
  /*
   We're giving you this function. Take a look at it, you might see some usage
   that's new and different. That's because we're avoiding a well-known, but
   sneaky bug that we'll cover in the next few lessons!
  
   As a result, the lessons for this function will pass and it will be available
   for you to use if you need it!
   */
  
  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date;
    });
  
    const payable = eligibleDates.reduce(
      function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
      }.bind(this),
      0
    ); // <== Hm, why did we need to add bind() there? We'll discuss soon!
  
    return payable;
  };
