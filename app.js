let tg = window.Telegram.WebApp;
var MainButton = tg.MainButton;
var BackButton = tg.BackButton;

MainButton.show();
BackButton.show();
tg.expand();

let mainwindowTitleContainer = document.getElementById("mainwindowTitleContainer");

let p = document.createElement("p");

p.innerText = `Привет, ${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`

mainwindowTitleContainer.appendChild(p);