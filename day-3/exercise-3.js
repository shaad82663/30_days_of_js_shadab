var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();

month = month > 9 ? month : '0'+month;
date = date > 9 ? date : '0'+date;

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);