let tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;
const mainButton = Telegram.WebApp.MainButton;

mainButton.show();
BackButton.show();

BackButton.addEventListener('click', () => {
    javascript:history.back();
  });
