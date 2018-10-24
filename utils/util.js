let year
let month
let day
let hour
let minute
let second
let formatTime = date => {
  year = date.getFullYear()
  month = date.getMonth() + 1
  day = date.getDate()
  hour = date.getHours()
  minute = date.getMinutes()
  second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
