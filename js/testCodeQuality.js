let log4js = require('log4js');
const logger = log4js.getLogger();
let count = 0;
function Repeat(string, letter)
{ 
  for(let i = 0;i<string.length;i = i + 1)
  {
    if(string.charAt(i) === letter)
    {
      count = count + 1;
    }
  }
}
Repeat('gmail.com', 'm');
logger.debug(count);

