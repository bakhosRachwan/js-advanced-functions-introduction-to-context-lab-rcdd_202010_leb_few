const createEmployeeRecord = (arr) => {
  return {
      firstName : arr[0],
      familyName : arr[1],
      title : arr[2],
      payPerHour: arr[3],
      timeInEvents : [],
      timeOutEvents : []
    };
};

const createEmployeeRecords = (matrix) => {
 let result = [];
  let s = matrix.map(arr => {
    return result.push(createEmployeeRecord(arr));
  });
 return result;
  };
  
const createTimeInEvent = (arr, dateIn) => {
  let dateArray = dateIn.split(' ');
  let timeObject = {
    type: "TimeIn",
    date: dateArray[0],
    hour: parseInt(dateArray[1])
  };
  arr.timeInEvents.push(timeObject);
  return arr;
};
   
const createTimeOutEvent = (arr, dateOut) => {
   let dateArray = dateOut.split(' ');
  let timeObject = {
    type: "TimeOut",
    date: dateArray[0],
    hour: parseInt(dateArray[1])
  };
      arr.timeOutEvents.push(timeObject);
      return arr;
};
   
const hoursWorkedOnDate = (arr, date=0) => {
  let inEvent = employee.timeInEvents.find(function(e){
        return e.date === date
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === date
    })

    return (outEvent.hour - inEvent.hour) / 100
  }
  return hours
}
const wagesEarnedOnDate = (arr, date=0) => {
    let hoursWorked = hoursWorkedOnDate(arr, date)
    let wages = arr.payPerHour*hoursWorked
    return wages
}

const allWagesFor = (arr) =>{
  let eligibleDates = arr.timeInEvents.map(el => {
        return el.date
    })

    let payable = eligibleDates.reduce((memo, d) => {
        return memo + wagesEarnedOnDate(arr, d)
    }, 0)

    return payable
}
const calculatePayroll = (arr) => {
    return arr.reduce((acc, val) => {
        return acc + allWagesFor(val)
    }, 0)
}  

const findEmployeeByFirstName = (arr, string) => {
  return arr.find(el => {
    return el.firstName === string
  })
}  

