$(document).ready(function(){
    $("#form").submit(function(e) {
        e.preventDefault() //устанавливаем событие отправки для формы с id=form
            let form_data = $(this).serialize(); //собираем все данные из формы
            $.ajax({
            type: 'POST', //Метод отправки
            url: 'send-form.php', //путь до php фаила отправителя
            data: form_data,
                    success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                    alert('Спасибо! Скоро я с вами свяжусь.'); // пoкaжeм eё тeкст
                    }
            });
    });
});   