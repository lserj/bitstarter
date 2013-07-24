Var Express = Require('Express');
Var App = Express();
App.Use(express.logger());

app.Get('/', function(request, response) {
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
