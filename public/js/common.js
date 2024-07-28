//display name
$('.displayName').on('click', function () {
    window.location.href = 'login.html'
});

//로그인 버튼을 클릭
$('#btnLogin').on('click', function () {
    let loginEmail = $("#loginEmail").val();
    let loginPwd = $("#loginPwd").val();
    window.location.href = 'index.html'
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPwd).then((result) => {

        //1.로그인이 성공하면
        // console.log(result.user);//uid가 발급된 유저번호
        //2.로그인한 사용자의 정보를 로컬 스토리지에 저장
        localStorage.setItem('user', JSON.stringify(user))

        //페이지전환->리다이렉션
        window.location.href = 'index.html';
    });

    //유저정보확인
    let localName = localStorage.getItem('user');
    //console.log(localName)
    if (localName) {
        //사용자 정보가 있으면 displayName을 표시
        let displayName
    }








    let jsonText = JSON.parse(localName);
    //console.log(jsonText)
    $('.displayName').text(jsonText)

    //.onAuthStateChanged-사용자의 로그인상태가 변할때 실행
    //로그인시/로그아웃시/새로고침
    /* firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            //사용자가 로그인한 경우 
            //console.log(user)
            //console.log(user.uid)
            //console.log(user.displayName)
            localStorage.setItem('user', JSON.stringify(user))
        }

    })*/
});
$('#register').on('click', function () {
    firebase.auth().signOut();
    alert("회원가입이 완료되었습니다.")
})
