const createError = require('http-errors');
const passport = require('passport');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const NewPool = require('pg').Pool
const newpool = new NewPool ({
    user: 'xwzwfabsisqehx',
    host: 'ec2-174-129-33-187.compute-1.amazonaws.com',
    database: 'd43qkd1o4m0qim',
    password: '81edfa265e7a0d8d816aaaae41c6723bcdb4f6f00865a0670155ce4246af5bea',
    port: 5432,
})
// const newpool = new NewPool ({
//   user: 'chantee',
//   host: 'localhost',
//   database: 'remedies',
//   password: '',
//   port: 5432,
// })
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const db = require('./queries') 

const { Pool, Client } = require('pg')
const connectionString = 'postgres://xwzwfabsisqehx:81edfa265e7a0d8d816aaaae41c6723bcdb4f6f00865a0670155ce4246af5bea@ec2-174-129-33-187.compute-1.amazonaws.com:5432/d43qkd1o4m0qim'
// const { Pool, Client } = require('pg')
// const connectionString = 'postgressql://postgres:postgres@localhost:5432/remedies'

const client = new Client({
    connectionString: connectionString
});
client.connect();

const index = require('./routes/index');
var testAPIRouter = require("./routes/testAPI")


const app = express();
const session = require('express-session')

app.use(passport.initialize())
app.use(passport.session())

//passport

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

  // passport.use(new LocalStrategy((username, password, cb) => {
  //   newpool.query('SELECT id, username, password FROM users WHERE username= $1', [username], (err, result) => {
  //     if(err) {
  //         console.log(err)
  //       return cb(err)
  //     }
  // console.log(result)
  //     if(result.rows.length > 0) {
  //       const first = result.rows[0]
  //       cb(null, { id: first.id, username: first.username})
  //      } else {
  //        cb(null, false)
  //      }
  //   })
  // }))


  passport.serializeUser((user, done) => {
      console.log("serializing")
    done(null, user.id)
  })
  

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });



  // passport.deserializeUser((id, cb) => {
  //     console.log("deserializing")
  //   db.query('SELECT id, username FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
  //       console.log("passport")
  //     if(err) {
  //         console.log(err)
  //       return cb(err)
  //     }
  
  //     cb(null, results.rows[0])
  //   })
  // })
//end passport

// var whitelist = ['http://localhost:3000', 'http://localhost:9000/login']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

//session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
//end session

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(express.static('public'))
app.use('/', index);
app.use("/testAPI", testAPIRouter);
// app.post('/login', cors(),
// passport.authenticate('local', { failureRedirect: '/login'}),
// function(req, res) {
//   res.redirect('/');
// });



// app.get('/login', 
// passport.authenticate('local'), 
// users.login)
// app.get('/login', db.getUsers, passport.authenticate('local'), users.login, function(req, res) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
// });
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000,', 'http://localhost:9000/login');
//   next();
// });

// app.use(cors(corsOptions));
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/users', cors(), db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.post('/login', db.getUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
