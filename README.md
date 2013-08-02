ViaCRYPT
========

One time message system.

Install
-------

Dependencies are handled by npm and installed like this:

    npm install

Compiling
---------

The index.html page is generated by running compile.js

    ./compile.js

Configurations are found on config.json, copy yours from
the config.json.sample

Running
-------

Should be as simple as

    ./server.js

Then checkout `localhost:8001` to see the app.

Supervisor
----------

    [program:viacrypt]
    command=/path/to/viacrypt/server.js
    stdout_logfile=/path/to/viacrypt/logs/viacrypt.log
