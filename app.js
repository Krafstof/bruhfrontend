let tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;

BackButton.addEventListener('click', () => {
    javascript:history.back();
  });

BackButton.show();