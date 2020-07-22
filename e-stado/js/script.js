$(document).ready(function() {
	$('#phone').mask('+375 (99) 99-99-99');
    
    let $body = $('body');
    
    $body.on('click', '#btn-step-1', function (e) {
        e.preventDefault();
        
        let countCows = $('#count-cows').val();
        
        if (! countCows.length) {
            alert('Заполните поле');
        } else {
            $('#step-1').removeClass('active');
            $('#step-2').addClass('active');
            
            $('#progress-step-2').addClass('active-bar');
            $('.progress div').css({
                width: '50%'
            });
        }
    }).on('click', '#btn-step-2', function (e) {
        e.preventDefault();
        
        let countMilk = $('#count-milk').val();
        
        if (! countMilk.length) {
            alert('Заполните поле');
        } else {
            $('#step-2').removeClass('active');
            $('#step-3').addClass('active');
            
            $('#progress-step-3').addClass('active-bar');
            $('.progress div').css({
                width: '100%'
            });
        }
    }).on('click', '#btn-step-3', function (e) {
        e.preventDefault();
        
        if (! $('[name="who_am_i"]').is(':checked')) {
            alert('Выберите что-нибудь');
        } else {
            $('#step-3').removeClass('active');
            $('#step-4').addClass('active');
        }
    }).on('click', '#step-4 .input-choice label', function () {
        let value = $(this).find('input').val(),
            field = value == 'email' ? '.input-field__email' : '.input-field__phone';
        
        $('#step-4 .input-field div').hide();
        $(field).show();
    }).on('submit', 'form', function (e) {
        e.preventDefault();
        
        let $data = new FormData($('form')[0]);

        $.ajax({
            type: 'post',
            data: $data,
            url: 'mail.php',
            processData: false,
            contentType: false,
            success: function (response) {
                alert(response);
            },
            error: function () {
                alert('Произошла ошибка при отправке.');
            }
        });
    });
    
    $('.input-choice').on('click', 'label', function () {
        let $choiceBlock = $(this).closest('.input-choice');
        
        $choiceBlock.find('input').attr('checked', false);
        $choiceBlock.find('.radio span').removeClass('active');
        
        $(this).find('span').addClass('active');
        $(this).find('input').attr('checked', true);
    });
});