const moment = require('moment');

let val;

val = moment().format('YYYY-MM-DD');
val = moment('2005-03-05').format('MMMM Do YYYY, h:mm:ss a');
val = moment('2005-03-05').format('MMMM Do YYYY');
val = moment().format('dddd');
val = moment().format('ddd');
val = moment().format('dd');
val = moment().format('d');
val = moment().format('[The year is] YYYY');
val = moment("20111031", "YYYYMMDD").fromNow();
val = moment().startOf('year').fromNow();
val = moment().endOf('year').fromNow();
val = moment('2017-03-05').subtract(10, 'weeks').calendar();
val = moment('2017-03-05').add(10, 'years').calendar();

console.log(val);