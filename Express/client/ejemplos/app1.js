import fetch from "node-fetch";

const recursos = "http://127.0.0.1:8080"
fetch(recursos + "/fecha").then(res => res.text()).then(body => console.log(body))
fetch(recursos + "/usuario").then(res => res.json()).then(body => console.log(body))