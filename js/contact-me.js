jQuery(document).ready(function () {

    $('form#contact-form').submit(function () {
        $('form#contact-form .error').remove();
        $('form#contact-form .success').remove();
        var hasError = false;
        $('.requiretop').each(function () {
            if (jQuery.trim($(this).val()) === '') {
                $(this).parent().append('<label class="error" for="name">This field is required.</label>');
                hasError = true;
            } else if ($(this).attr('type')=="email") {
                var emailReg = /^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;
                if (!emailReg.test(jQuery.trim($(this).val()))) {
                    $(this).parent().append('<label class="error" for="name">Please enter a valid email address.</label>');
                    hasError = true;
                }
            }
        });
        if (!hasError) {
            formInput = $(this).serialize();
            $.post($(this).attr('action'), formInput, function (data) {
                $('form#contact-form').append('<div class="alert animated-middle fadeIn alert-success alert-dismissable"><strong><i class="fa fa-check"></i> Your message has been sent, we will get back to you asap !</strong></div>');
                setTimeout(function() {
                    $(".alert-success").addClass("fadeOut");
                }, 5000);

                setTimeout(function() {
                    $(".alert-success").addClass("hide");
                }, 6000);

            });
            $('.requiretop,textarea').val('');

        }
        return false;
    });
    $('form#contact-form input').focus(function () {
        $('form#contact-form .error').remove();
        $('form#contact-form .success').remove();
    });
    $('form#contact-form textarea').focus(function () {
        $('form#contact-form .error').remove();
        $('form#contact-form .success').remove();
    });

});
