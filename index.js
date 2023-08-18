// Set express
var express = require('express');
var app = express();

// Set up handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Set port
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

// Routing
// Add all the routs
// Add descrip and robots for all the routs
app.get('/', function(req, res){
    res.render('home', {
        title: "Juan Bolatti - Desarrollador Web"
    });
});

// Port in console
app.listen(app.get('port'), function(){
    console.log('Started on http://localhost:' +
    app.get('port'));
});


