function signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (value) {
        window.location = 'dashboard.html?usid=' + value.uid;
    }).catch(function (error) {
        if (error) {
            return alert(error.message);
        }
    });
};

