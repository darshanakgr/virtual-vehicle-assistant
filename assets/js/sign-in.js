$('form#sign-in-form').on('submit', function (e) {
    e.preventDefault();

    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    signIn(email, password);
});
