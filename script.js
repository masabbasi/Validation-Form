const userNameInput = document.querySelector(".username-input");
const userNameMsg = document.querySelector(".username-msg");
const passwordInput = document.querySelector(".password-input");
const passwordMsg = document.querySelector(".password-msg");
const signInBtn = document.querySelector(".signin-btn");
const signInMsg = document.querySelector(".signin-msg");

signInBtn.addEventListener("click",signIn)

function signIn (e) {
    e.preventDefault();
    // userNameInput.value="";
    // PasswordInput.value="";
    userNameMsg.innerText="";
    passwordMsg.innerText="";
    const usernameValue = userNameInput.value;
    const passwordValue = passwordInput.value;
    let validData = true;
    if (usernameValue.length===0 || usernameValue.indexOf('@')===-1 || usernameValue.indexOf('.')===-1) {
        userNameMsg.innerText="Enter A Valid UserName!"
        validData = false;
    }
    if (passwordValue.length===0) {
        passwordMsg.innerText="Please Enter A Valid Password!"
        validData = false;
    } else if (passwordValue.length<=7) {
        passwordMsg.innerText="Password Too Short!";
        validData = false;
    }

    if (validData) {
        const body = JSON.stringify({
            username:usernameValue,
            password:passwordValue
        });
        const header = {'Content-type': 'application/json; charset=UTF-8'};
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            body:body,
            header:header,
        })
        .then(response=>{
            if (response.ok) {
                signInMsg.innerText="You Signed In Successfully. :)"
            }
        })
    }

}