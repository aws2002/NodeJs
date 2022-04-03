// const http = require("http");
// const fs = require("fs");
// const _ = require("lodash");
// const servers = http.createServer((req, res) => {
//   // console.log(req.url,req.method);
//   //lodash
//   const number = _.random(0, 30);
//   console.log(number);

//   const hello = _.once(() => {
//     console.log("hello osama");
//   });
//   hello()
//   hello()

//   res.setHeader("Content-Type", "text/html");
//   let path = "./pages/";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/about-us":
//       res.statusCode = 301;
//       res.setHeader("Location", "/about");
//       res.end();
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.end(data);
//     }
//   });
// });
// servers.listen(3000, "localhost", () => {
//   console.log("listen for req on part 3000");
// });
// // nodemon file Name
