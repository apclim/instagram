//document 객체를 대상으로 이벤트 리스너를 추가합니다.
//이벤트 종류는 "DOMContentLoaded" 입니다.
document.addEventListender("DOMContentLoaded",
//이벤트핸들러입니다.
//HTML 코드가 로딩된 다음 비동기적으로 수행될 작업들입니다.
function(e){
    //input 태그를 찾아 button 변수에 저장합니다.
    let button = document.querySelector("input")
//버튼 변수에 이벤트 리스너를 추가합니다.
// 이벤트 종류는 "input"입니다.
button.addEventListener("input",
    function(e){
        //콘솔입력창의 값을 출력합니다.
        console.log(etarget.value)
         }
        )
    }
)

function hi(){
    alert("hi")
}