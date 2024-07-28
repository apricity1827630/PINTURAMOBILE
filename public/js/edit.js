const db = firebase.firestore();//데이터베이스 가져오기
const storage = firebase.storage();

let queryString = new URLSearchParams(window.location.search);
//console.log(queryString.get('id'))
let recipeId = queryString.get('id')

db.collection('recipe').doc(recipeId).get().then((result)=>{
    //console.log(result.data());

    $('#title').val(result.data().title);
    $('#content').val(result.data().content);
    $('#price').val(result.data().price);
})

$('#send').on('click', function() {
    let chageRecipe = {
        title: $('#title').val(),
        content: $('#content').val(),
        price: $('#price').val(),
    };

    db.collection('recipe').doc(recipeId).update(chageRecipe).then(()=>{
        alert("상품수정이 완료되었습니다.");
        window.location.href='index.html'
    }).catch((error)=> {
        console.log('문서 업데이트 중 에러가 발생했습니다', error)
    })
})