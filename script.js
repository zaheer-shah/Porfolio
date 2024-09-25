
// function fun() {
//     let name = document.getElementById('username').value;
//     let mobile = document.getElementById('mobile').value;
//     let mail = document.getElementById('mail').value;
//     let textarea = document.getElementById('textarea').value;
//     var validation = true;


//     if (name == '') {
//         validation = false;
//         var nameval = document.getElementById('nameval')
//         nameval.innerHTML = "* Please enter your name";
//     }
//     else if (name.length < 5) {
//         validation = false;
//         var nameval = document.getElementById('nameval')
//         nameval.innerHTML = "* Name must contain atleast 5 charachters";
//     }
//     else {
//         document.getElementById(name).innerHTML = '';
//     }




//     if (mobile == '') {
//         validation = false;
//         var mobileval = document.getElementById('mobileval')
//         mobileval.innerHTML = "* Please enter your mobile number";
//     }
//     else if (mobile.length < 11) {
//         validation = false;
//         var mobileval = document.getElementById('mobileval')
//         mobileval.innerHTML = "* phone number must contain atleast 5 charachters";
//     }
//     else {
//         document.getElementById(mobile).innerHTML = '';
//     }

//     if (mail == '') {
//         validation = false;
//         var emailval = document.getElementById('emailval')
//         emailval.innerHTML = "* write your email address here";

//     }
//     else {
//         document.getElementById(mail).innerHTML = '';
//     }



//     if (textarea == '') {
//         validation = false;
//         var textval = document.getElementById('textval')
//         textval.innerHTML = "* write your message here";

//     }
//     else {
//         document.getElementById(textarea).innerHTML = '';
//     }


//     return validation;
// }
const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("side-menu");
    const closeBtn = document.getElementById("closebtn");
    
    hamburger.addEventListener("click", () => {
        sideMenu.classList.add("open");
    });
    
    closeBtn.addEventListener("click", () => {
        sideMenu.classList.remove("open");
    });
    


function validateName() {
    let name = document.getElementById('username').value;
    let nameval = document.getElementById('nameval');
    if (name == '') {
        nameval.innerHTML = "* Please enter your name";
        return false;
    } else if (name.length < 5) {
        nameval.innerHTML = "* Name must contain at least 5 characters";
        return false;
    } else {
        nameval.innerHTML = '';
        return true;
    }
}

function validateMobile() {
    let mobile = document.getElementById('mobile').value;
    let mobileval = document.getElementById('mobileval');
    if (mobile == '') {
        mobileval.innerHTML = "* Please enter your mobile number";
        return false;
    } else if (mobile.length < 11) {
        mobileval.innerHTML = "* Phone number must contain at least 11 characters";
        return false;
    } else {
        mobileval.innerHTML = '';
        return true;
    }
}

function validateEmail() {
    let mail = document.getElementById('mail').value;
    let emailval = document.getElementById('emailval');
    if (mail == '') {
        emailval.innerHTML = "* Write your email address here";
        return false;
    } else {
        emailval.innerHTML = '';
        return true;
    }
}

function validateTextarea() {
    let textarea = document.getElementById('textarea').value;
    let textval = document.getElementById('textval');
    if (textarea == '') {
        textval.innerHTML = "* Write your message here";
        return false;
    } else {
        textval.innerHTML = '';
        return true;
    }
}

// Add event listeners for live validation
document.getElementById('username').addEventListener('input', validateName);
document.getElementById('mobile').addEventListener('input', validateMobile);
document.getElementById('mail').addEventListener('input', validateEmail);
document.getElementById('textarea').addEventListener('input', validateTextarea);

// Form submission validation
function fun() {
    let isNameValid = validateName();
    let isMobileValid = validateMobile();
    let isEmailValid = validateEmail();
    let isTextareaValid = validateTextarea();
    
    return isNameValid && isMobileValid && isEmailValid && isTextareaValid;

   


}
