document.querySelector("#OK").addEventListener("click", () => {
  const currentDate = new Date();

  let date1 = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  let targetDateArr = document.querySelector("#targetDate").value.split("-");
  let date2 = `${targetDateArr[1]}/${targetDateArr[2]}/${targetDateArr[0]}`;

  let a = new Date(date1);
  let b = new Date(date2);

  let DifferenceInTime = b.getTime() - a.getTime();

  let DifferenceInDays = Math.round(DifferenceInTime / (1000 * 3600 * 24));

  DifferenceInDays = DifferenceInDays - 7 + a.getDay();

  let weeks = Math.ceil(DifferenceInDays / 7);

  let currentShift = document.querySelector("#zmiana").value;
  const shifts1 = ["rano", "popołudnie", "noc"];
  const shifts2 = ["popołudnie", "noc", "rano"];
  const shifts3 = ["noc", "rano", "popołudnie"];

  let targetShift = weeks % 3;

  var audio = new Audio("gay-echo.mp3");
  audio.volume = 1;
  audio.play();

  if (currentShift === "0") {
    alert(shifts1[targetShift]);
  } else if (currentShift === "1") {
    alert(shifts2[targetShift]);
  } else {
    alert(shifts3[targetShift]);
  }
});
