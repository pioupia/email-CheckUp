const config = require("./config.json");

module.exports = async function(options) {

  if(!options || !options.mail) return "Please specify an email address";
  const checkArobase = options.mail.split(/@/g);
  if(checkArobase.length != 2) return false;
  if(checkArobase[0].length >= 2 && checkArobase[0].length <= 30){
    if(checkArobase[1].length <= 15 && checkArobase[1].length >= 4){
      const isDomainTrue = await checkDomain(checkArobase[1], options);
      return isDomainTrue;
    }else return false;
  }else return false;

};

async function checkDomain(domaine, options){
    const dns = domaine.split(['.']);
  if(dns.length != 2) return false;
  if(options.blacklist == true && config.blacklist.includes(dns[0].toLowerCase())) return false;
  if(options.whitelist && !options.whitelist.includes(dns[1].toLowerCase())) return false;
  if(!options.whitelist && !config.whitelist.includes(dns[1].toLowerCase())) return false;
  return true;
  }