const config = require("./config.json");
const fetch = require("node-fetch");

module.exports = async function(options) {

  if(!options || !options.mail) return "Please specify an email address";
  const checkArobase = options.mail.split(/@/g);
  if(checkArobase.length != 2) return false;
  if(checkArobase[0].length >= 2 && checkArobase[0].length <= 30){
    if(checkArobase[1].length <= 15 && checkArobase[1].length >= 4){
      const isDomainTrue = await checkDomain(checkArobase[1], options);

      if(!options.exists || options.exists != true) return isDomainTrue;
      else{
        const deliverable = await exists(mail);
        return deliverable;
      }
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

  function exists(mail){
    const url = `https://api.trumail.io/v2/lookups/json?email=${mail}`
    const authParams = {
          headers:{
          'Host': 'api.trumail.io',
          'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0',
          'Accept': 'text/plain, */*; q=0.01',
          'Accept-Language': 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3',
          'Accept-Encoding': 'gzip, deflate, br',
          'Origin': 'https://trumail.io',
          'Connection': 'keep-alive',
          'Referer': 'https://trumail.io/',
          'TE': 'Trailers'
          }
        }
        
        return new Promise(async resolve => {
                 fetch(url, authParams).then(res => { 
                    res.json().then(data => {
                      resolve(data.deliverable);
                    })
                })
            })
  }