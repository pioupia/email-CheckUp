# email-checkup

A email verification package. Disposable email filter and verifies that the email exists.

[![downloadsBadge](https://img.shields.io/npm/dt/email-checkup?style=for-the-badge)](https://npmjs.com/email-checkup)
[![versionBadge](https://img.shields.io/npm/v/email-checkup?style=for-the-badge)](https://npmjs.com/email-checkup)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install email-checkup.

```bash
npm i email-checkup
```

## Usage

```javascript
const emailcheckup = require("email-checkup");

emailcheckup({
    mail: "youremailadresse@mail.com", //email to check
    blacklist: false, //by default is true.
    whitelist: ["com", "be", "ch", "fr"], //By default is ["com", "be", "ch", "fr"]
    exists: true //by default is false.
}).then(result => {
    console.log(result) // Return "true" if the email is real. And return "false" if the email is not real Warning, the package does not check if the email exists (for now)!
})
```

## Options

email-checkup supports 3 options :

* **blacklist** - _true / false_ (Defaults to true). This option is optional. It enables a blacklist of more than 360 disposable email sites.
* **whitelist** - _array_ (Defaults : ["com", "be", "ch", "fr"]). This option is optional. It enables a whitelist of all domains accepted in the email.
* **mail** - _email_ (This option is not optional !). Put the email to check.
* **exists** - _true / false_ (Defaults to false). This option allows you to check if the email exists !

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)