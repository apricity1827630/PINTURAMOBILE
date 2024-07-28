const loginEmail = document.querySelector("#loginEmail");      
const loginPwd = document.querySelector("#loginPwd");      
console.log(loginEmail);


function btnLogin() {
    userName= loginEmail.value;
    if (userName == '') {
        alert("아이디를 입력해주세요")
    } else {
        alert(`${userName}님 로그인 완료되었습니다.`)
    }
    loginEmail.value = ''
}