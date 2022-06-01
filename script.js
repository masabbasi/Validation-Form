const userNameInput = document.querySelector(".username-input");
const userNameMsg = document.querySelector(".username-msg");
const passwordInput = document.querySelector(".password-input");
const passwordMsg = document.querySelector(".password-msg");
const signInBtn = document.querySelector(".signin-btn");
const signInMsg = document.querySelector(".signin-msg");

signInBtn.addEventListener("click",signIn)

function signIn (e) {
    e.preventDefault();
    userNameMsg.innerText="";
    passwordMsg.innerText="";
    const usernameValue = userNameInput.value;
    const passwordValue = passwordInput.value;
    let validData = true;
    // if (usernameValue.length===0 || usernameValue.indexOf('@')===-1 || usernameValue.indexOf('.')===-1) {
    //     userNameMsg.innerText="Please Enter A Valid UserName!"
    //     validData = false;
    // }
    // if (passwordValue.length===0) {
    //     passwordMsg.innerText="Please Enter A Valid Password!"
    //     validData = false;
    // } else if (passwordValue.length<=7) {
    //     passwordMsg.innerText="Password Too Short!";
    //     validData = false;
    // }
    const userNameRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const passwordRegEx = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

    if (usernameValue.length===0) {
        userNameMsg.innerText="Please Enter A UserName!"
        validData = false;
    } else if (!userNameRegEx.test(usernameValue)) {
        userNameMsg.innerText="Please Enter A Valid UserName!"
        validData = false;
    }
    // if (passwordValue.length===0) {
    //     passwordMsg.innerText="Please Enter A Password!"
    //     validData = false;
    // } else if (passwordValue.length<=7) {
    //     passwordMsg.innerText="Password Too Short!";
    //     validData = false;
    // }
    if (!passwordRegEx.test(passwordValue)) {
        passwordMsg.innerText="1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long";
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