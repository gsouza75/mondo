import express from 'express';
import fnDebug from 'debug';

let app   = express(),
    debug = fnDebug('app');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

let server = app.listen(3000, () => {
    let addr = server.address(),
        host = addr.address,
        port = addr.port;

    debug('App listening at http://%s:%s', host, port);
});
