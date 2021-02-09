var myVar = setInterval(() => {
  var date = new Date();

  // Seattle time zone
  let hourInSeattle = date.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
  });

  // get hour and 12-Hour Periods
  let hourArraySeattle = hourInSeattle.split(" ");

  let hourIntSeattle = parseInt(hourArraySeattle[0]);
  let hourPeriodSeattle = hourArraySeattle[1];

  let minInSeattle = date.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    minute: "2-digit",
  });

  let secInSeattle = date.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    second: "2-digit",
  });

  let hourInDegSeattle = String(
    hourIntSeattle * 30 + minInSeattle * 0.5 + secInSeattle * 0.0083
  );
  let minInDegSeattle = String(parseInt(minInSeattle) * 6 + secInSeattle * 0.1);
  let secInDegSeattle = String(secInSeattle * 6);

  // Boston time zone
  let hourInBoston = date.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
  });

  // get hour and 12-Hour Periods
  let hourArrayBoston = hourInBoston.split(" ");

  let hourIntBoston = parseInt(hourArrayBoston[0]);
  let hourPeriodBoston = hourArrayBoston[1];

  let minInBoston = date.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    minute: "2-digit",
  });

  let secInBoston = date.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    second: "2-digit",
  });

  let hourInDegBoston = String(
    hourIntBoston * 30 + minInBoston * 0.5 + secInBoston * 0.0083
  );
  let minInDegBoston = String(parseInt(minInBoston) * 6 + secInBoston * 0.1);
  let secInDegBoston = String(secInBoston * 6);

  document
    .getElementById("seattle")
    .getElementsByClassName("hour")[0].style.transform =
    "translate(100px) rotate(" + hourInDegSeattle + "deg)";
  document
    .getElementById("seattle")
    .getElementsByClassName("minute")[0].style.transform =
    "translate(100px) rotate(" + minInDegSeattle + "deg)";
  document
    .getElementById("seattle")
    .getElementsByClassName("second")[0].style.transform =
    "translate(100px) rotate(" + secInDegSeattle + "deg)";

  document.getElementById("seattle-am-pm").innerHTML =
    '<div class="am-pm" id="seattle-am-pm">' + hourPeriodSeattle + "</div>";

  document
    .getElementById("boston")
    .getElementsByClassName("hour")[0].style.transform =
    "translate(100px) rotate(" + hourInDegBoston + "deg)";
  document
    .getElementById("boston")
    .getElementsByClassName("minute")[0].style.transform =
    "translate(100px) rotate(" + minInDegBoston + "deg)";
  document
    .getElementById("boston")
    .getElementsByClassName("second")[0].style.transform =
    "translate(100px) rotate(" + secInDegBoston + "deg)";

  document.getElementById("boston-am-pm").innerHTML =
    '<div class="am-pm" id="boston-am-pm">' + hourPeriodBoston + "</div>";
}, 1000);
