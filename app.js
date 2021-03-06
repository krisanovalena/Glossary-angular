function requireHTTPS(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const express = require('express');
const app = express();

app.use(requireHTTPS);
app.use(express.static('./dist/myapp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/myapp'}),
);

app.listen(process.env.PORT || 8080);
