$('form#sign-up-form').on('submit', function (e) {
    e.preventDefault();

    var password = $('[name=password]').val();
    var confirmPassword = $('[name=confirm-password]').val();

    if (password == confirmPassword) {
        var email = $('[name=email-address]').val();

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function (data) {
            var uid = data.uid;
            var saleName = $('[name=sale-name]').val();
            var addressLineOne = $('[name=address-line-one]').val();
            var addressLineTwo = $('[name=address-line-two]').val();
            var addressLineThree = $('[name=address-line-three]').val();
            var addressLineFour = $('[name=address-line-four]').val();
            var telephoneNo = $('[name=telephone-no]').val();
            var mobileNo = $('[name=mobile-no]').val();

            firebase.database().ref().child('sale').child(uid).set({
                saleName,
                addressLineOne,
                addressLineTwo,
                addressLineThree,
                addressLineFour,
                email,
                telephoneNo,
                mobileNo,
            }).catch(function (error) {
                return alert(error.code, error.message);
            });

            var fileList = $('[name=image-upload]').get(0).files;
            if (fileList.length) {
                var file = fileList[0];
                var storageRef = firebase.storage().ref();
                storageRef.child('sale-image').child(data.uid).put(file).then(function (snapshot) {
                    alert('Account is created successfully');
                }).catch(function (error) {
                    alert('Unable to upload your profile picture. But Account Created Successfully');
                })
            } else {
                console.log('No photo uploaded');
            }
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
    } else {
        alert('Make sure both password and confirm password are the same.');
    }


});

