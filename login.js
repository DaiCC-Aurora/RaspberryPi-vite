import './style.css'

/**
 * @brief 检测输入框是否为空
 */
function checkInput() {
    let accInput = (document.getElementById("textNam").value.trim() === "");
    let pwdInput = (document.getElementById("textPwd").value.trim() === "");
    if (accInput === false) {
        document.getElementById("textNam").classList.replace("inputN", "inputS");
        document.getElementById("textNam").classList.replace("inputE", "inputS");

        document.getElementById("textName").innerText = "";
    } else {
        document.getElementById("textNam").classList.replace("inputN", "inputE");
        document.getElementById("textNam").classList.replace("inputS", "inputE");

        document.getElementById("textName").innerText = "该字段为必填项";
    }

    if (pwdInput === false) {
        document.getElementById("textPwd").classList.replace("inputN", "inputS");
        document.getElementById("textPwd").classList.replace("inputE", "inputS");

        document.getElementById("textPassword").innerText = "";
    } else {
        document.getElementById("textPwd").classList.replace("inputN", "inputE");
        document.getElementById("textPwd").classList.replace("inputS", "inputE");

        document.getElementById("textPassword").innerText = "该字段为必填项";
    }

    if (accInput && pwdInput) {
        return false;
    }
    return true;
}

function login() {
    if (!checkInput()) {
        alert("请输入用户名及密码");
    }

    const url = "http://192.168.1.11:81/v1/users/login";
    const data = {
        "username": document.getElementById("textNam").value,
        "password": document.getElementById("textPwd").value
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error(error));
}


document.getElementById("textNam").addEventListener('input', checkInput);
document.getElementById("textPwd").addEventListener('input', checkInput);
document.getElementById("login").addEventListener('click', login);