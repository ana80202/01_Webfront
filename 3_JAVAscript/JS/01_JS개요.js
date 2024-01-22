/*.js 파일 내부를 <script>태그 
내부라고 생각하면 됨*/

function externalFn() {
    alert("외부 파일에 작성된 externalFn()함수 호출됨");
} 
// 외부에 있는 파일 연결할 떄는 body 닫는 태그 바로 위에다가 작성해서 연결하기


//********************************* */


// JS 맛보기
// 버튼 클릭 시 body 태그이 글자색, 배경색을 변경


const body = document.querySelector("body");  /*body 태그 선택 */

/*실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode() {
    body.style.color = "white";  //글자색 흰색으로 변경
    //== 같다
    //= 오른쪽의 값을 왼쪽에 대입
    body.style.backgroundColor = "black";  //배경색 검정으로 변경
}

/*실행되면 라이트모드로 바꾸는 함수(기능) */
function lightMode() {
    body.style.color = "black";  //글자색 검정으로 변경
    body.style.backgroundColor = "white";  //배경색 흰색으로 변경
}
















