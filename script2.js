$(document).ready(function () {
    $("#registration-form").validate({
        rules: {
            fullName: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                digits: true,
                minlength: 10,
                maxlength: 15
            },
            birthday: {
                date: true
            },
            preferences: {
                minlength: 5
            },
            terms: {
                required: true
            }
        },
        messages: {
            fullName: {
                required: "Kérlek, add meg a teljes neved!",
                minlength: "A névnek legalább 3 karakter hosszúnak kell lennie."
            },
            email: {
                required: "Kérlek, add meg az e-mail címed!",
                email: "Érvényes e-mail címet adj meg!"
            },
            phone: {
                digits: "Csak számokat adhatsz meg.",
                minlength: "A telefonszám legalább 10 számjegyből álljon.",
                maxlength: "A telefonszám legfeljebb 15 számjegyből állhat."
            },
            preferences: {
                minlength: "Írd le kedvenc kávéidat, legalább 5 karakterben."
            },
            terms: {
                required: "Fogadd el a feltételeket a regisztrációhoz."
            }
        },
        })
});

