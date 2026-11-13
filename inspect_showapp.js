const fs = require('fs');
const html = fs.readFileSync('GESTOR_FIDELIZACIONES_BETA4.0.html', 'utf8');

const p = html.indexOf('function showApp(');
console.log('showApp pos:', p);
if (p !== -1) {
    console.log(html.substring(p, p + 1000));
}
