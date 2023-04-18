let tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;

let mainwindowTitleContainer = document.getElementById("clickcker");
mainwindowTitleContainer.addEventListener('click', () => {
  javascript:history.back();
});

BackButton.addEventListener('click', () => {
    javascript:history.back();
  });

BackButton.show();