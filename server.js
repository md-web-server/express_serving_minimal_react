// https://codeforgeek.com/2015/01/render-html-file-expressjs/
var express = require("express");
var app     = express();
app.use(express.static(__dirname));
// load initial index.html from current directory.

app.get('/',function(req,res){
  res.sendFile('/index.html');
  // // This is the loacation where users with security roles can be rendered js payloads specific to what they can actually access.
  //  if (res.header.role == "gen"){
  //   res.sendFile('/index.html');
  //  } else if (res.header.role == "authenticated"){
  //    res.sendFile('/customer.html');
  //  } else if (res.header.role == "admin" || res.header.role == "developer"){
  //    res.sendFile('/admin_authenticated.html');
  //  }
});


app.listen(3000);

console.log("Running at Port 3000");
