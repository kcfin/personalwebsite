var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

app.use(express.static(__dirname + '/public'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});

app.get(‘/spotify-playlist’, function (req, res) {
	res.redirect('https://open.spotify.com/user/122042988/playlist/5gcDjm36USOXq4b9JWJEFa');
});