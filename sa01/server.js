const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const port = 3000;

app.use(
  session({
    secret: "chave-secreta-para-sessao",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, // expira em 60 segundos
  })
);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function isAuthenticated(req, res, next) {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect("/");
  }
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "12345") {
    req.session.isAuthenticated = true;
    res.redirect("/dashboard");
  } else {
    res.send("<h1>Usuário ou senha incorretos.</h1>");
  }
});

app.get("/dashboard", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html")); // Carregar o dashboard.html
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
