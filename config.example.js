// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://my-ghost-blog.com',
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        storage: { //https://github.com/minwe/qn-store
            active: 'qn-store',
            'qn-store': {
                accessKey: 'your access key',
                secretKey: 'your secret key',
                bucket: 'your bucket name',
                origin: 'http://xx.xx.xx.glb.clouddn.com',
                // timeout: 3600000, // default rpc timeout: one hour, optional
                // if your app outside of China, please set `uploadURL` to `http://up.qiniug.com/`
                // uploadURL: 'http://up.qiniu.com/'

                // file storage key config [optional]
                // if `fileKey` not set, Qiniu will use `SHA1` of file content as key.
                fileKey: {
                    // use Qiniu hash as file basename, if set, `safeString` will be ignored
                    hashAsBasename: false,
                    safeString: true, // use Ghost safaString util to rename filename, e.g. Chinese to Pinyin
                    prefix: 'YYYY/MM/', // {String | Function} will be formated by moment.js, using `[]` to escape,
                    suffix: '', // {String | Function} string added before file extname.
                    extname: true // keep file's extname
                }
                // take `外面的世界 x.jpg` as example,
                // applied above options, you will get an URL like below after uploaded:
                //  http://xx.xx.xx.glb.clouddn.com/2016/06/wai-mian-de-shi-jie-x.jpg
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://localhost:2368',

        // Example refferer policy
        // Visit https://www.w3.org/TR/referrer-policy/ for instructions
        // default 'origin-when-cross-origin',
        // referrerPolicy: 'origin-when-cross-origin',

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

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            },
            pool: {
                afterCreate: function (conn, done) {
                    conn.run('PRAGMA synchronous=OFF;' +
                        'PRAGMA journal_mode=MEMORY;' +
                        'PRAGMA locking_mode=EXCLUSIVE;' +
                        'BEGIN EXCLUSIVE; COMMIT;', done);
                }
            },
            useNullAsDefault: true
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                user: 'root',
                password: '',
                database: 'ghost_testing',
                charset: 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host: '127.0.0.1',
                user: 'postgres',
                password: '',
                database: 'ghost_testing',
                charset: 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
