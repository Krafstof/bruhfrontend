let tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;

BackButton.show();
BackButton.addEventListener('click', () => {
    window.history.back();
  });