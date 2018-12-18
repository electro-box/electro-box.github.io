//Валидация формы обратной связи
$(document).ready(function() {
  $('#form').validate({
    rules: {
      name: {
        required:true
      },
      useremail: {
        required:true,
        email:true
      },
      telephone: {
        required:true,
      }
    },
    messages: {
      name: {
        required: "Введите ваше имя."
      },
      useremail: {
        required: "Введите адрес e-mail.",
        email: "Введите корректный e-mail."
      },
      telephone: {
        required: "Введите ваш номер телефона."
      }
    }
  });
});
