const fs = require('fs');


let config = JSON.parse(fs.readFileSync('_reveal-common/config.json', 'utf8'));

var stream = fs.createWriteStream("_reveal-common/plugins/configurator/injectConfig.js");
stream.once('open', function(fd) {
    stream.write("let Configurator = ");
    stream.write(JSON.stringify(config));
    stream.write(";\n");
    stream.write('console.log("Configurator loaded the following config:");\n');
    stream.write('console.log(Configurator);\n');
    stream.end();
});

module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {
        return resolve(
            markdown // preprocessor needs to be defined even if you do not use it for now
        );
    });
};