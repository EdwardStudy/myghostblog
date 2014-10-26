// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://127.0.0.1:2368',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        database: {
            client: 'mysql',
            connection: {
                host: 'rdsjeqrumjeqrum.mysql.rds.aliyuncs.com',
                port: 3306,
                user: 'root', //your ak
                password: 'xzdxzd6231', //your sk
                database: 'r13939k60x18et58',//your dbname
                charset: 'utf8'
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        },
        qiniu: {
            bucketname: 'edwardsblog',
            ACCESS_KEY: 'yP2I3wsnk6XvD3fGV_Zl90O2T0JSplfCGRHD4yeg',
            SECRET_KEY: 'R4P8c7VH8HN7rWZamz6IKu2hoBhB2bmDoswi0CQv',
            root: '/image/',
            prefix: 'http://edwardsblog.qiniudn.com'
        },
        updateCheck: false
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://127.0.0.1:2368',
        mail: {},
            database: {
            client: 'mysql',
            connection: {
                host: '222.31.76.67',
                port: 3306,
                user: 'root', //your ak
                password: '1q2w3e4r', //your sk
                database: 'ghost',//your dbname
                charset: 'utf8'
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        },
        qiniu: {
            bucketname: 'edwardsblog',
            ACCESS_KEY: 'yP2I3wsnk6XvD3fGV_Zl90O2T0JSplfCGRHD4yeg',
            SECRET_KEY: 'R4P8c7VH8HN7rWZamz6IKu2hoBhB2bmDoswi0CQv',
            root: '/image/',
            prefix: 'http://edwardsblog.qiniudn.com'
        },
        updateCheck: false
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2368',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2368',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2368',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '18080'
        },
        logging: false
    }
};

// Export config
module.exports = config;
