const returnTime = function (time) {
  alert('The current time is: ' + time)
}

const getTime = function(func){
  func(new Date());
}

getTime(returnTime)