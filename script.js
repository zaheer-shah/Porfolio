
function fun() {
    let name = document.getElementById('username').value;
    let mobile = document.getElementById('mobile').value;
    let mail = document.getElementById('mail').value;
    let textarea = document.getElementById('textarea').value;
    var validation = true;


    if (name == '') {
        validation = false;
        var nameval = document.getElementById('nameval')
        nameval.innerHTML = "* Please enter your name";
    }
    else if (name.length < 5) {
        validation = false;
        var nameval = document.getElementById('nameval')
        nameval.innerHTML = "* Name must contain atleast 5 charachters";
    }
    else {
        document.getElementById(name).innerHTML = '';
    }




    if (mobile == '') {
        validation = false;
        var mobileval = document.getElementById('mobileval')
        mobileval.innerHTML = "* Please enter your mobile number";
    }
    else if (mobile.length < 11) {
        validation = false;
        var mobileval = document.getElementById('mobileval')
        mobileval.innerHTML = "* phone number must contain atleast 5 charachters";
    }
    else {
        document.getElementById(mobile).innerHTML = '';
    }

    if (mail == '') {
        validation = false;
        var emailval = document.getElementById('emailval')
        emailval.innerHTML = "* write your email address here";

    }
    else {
        document.getElementById(mail).innerHTML = '';
    }



    if (textarea == '') {
        validation = false;
        var textval = document.getElementById('textval')
        textval.innerHTML = "* write your message here";

    }
    else {
        document.getElementById(textarea).innerHTML = '';
    }


    return validation;
}
