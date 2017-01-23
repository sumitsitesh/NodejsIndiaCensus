const fs = require('fs');

var file = fs.readFileSync('../../inputdata/India2011 (6).csv');
var fileString = file.toString();
var lines = fileString.split('\n');
var titles = lines[0].split(',');
var jsonArray = [];
for(let i=1; i<lines.length; i++) {
  let json = {};
  let values = lines[i].split(',');
  for(let j=0; j<values.length; j++) {
    let title = titles[j];
    json[title] = values[j];
  }
  jsonArray.push(json);
}
fs.writeFileSync('../../outputdata/indiasc2011.json', JSON.stringify(jsonArray));