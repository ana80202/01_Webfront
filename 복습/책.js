// var head = document.querySelector("#head");
// head.onclick = function() {
//     head.style.color = "red";
// }

//alert 은 단순히 메세지를 뵤여주는 기능만을 함/ confirm은 사용자가 확인이나
//취소 버튼 중에서 직접 선택할 수 있음

// alert("?")  //확인

// var reply = confirm("?");  //확인,취소

// var name = prompt("??", "!"); //기본값 지정

// var name = prompt("??"); //기본값 지정X


//document -> 웹 문서에서 괄호 안의 내용을 표시(write)하는 명령문

// document.write("<h1>가나다</h1>");

// var name = prompt("이름");
// document.write("<b><big>" + name + "</big></b>님");

/* <h1>어서오세요</h1>
var name = prompt("이름을 입력하세요");
console.log(name + "님, 환영합니다."); */

//콘솔 창에서 오류 찾고 수정하기
//오류 내용/오류 개수/ 오류 발생 위치 확인 가능
//오류 발생 위치 클릭 -> console > sources탭으로 전환 >오류가 발생한 파일과 행이 표시
// > 형광색으로 표시된 부분 고치기

// var now = new Date();
// var display = now.toLocaleDateString();
// document.write("시간" + display);

//소스 작성
//var =10 <X>
//var n =10; <o>
//var n =10; var sum = 0; <X>  -이어 쓰지 말고 한줄에 하나씩만 쓰기

//var num1=2;
//var num2=2;  <x>

//var num1=2;

//var num2=2;  <o>  -공백을 넣어서 작성해주기

//소스 코드를 설명해주는 주석 달아주기

//var today = new Date(); //현재 날짜 가져오기
//var h = today.getHours(); //시간 추출하기

//변수 : 프로그램을 실행하는 동안 값이 여러 번 달라질 수 있는 데이터
//상수 :  한번 값을 지정하면 바뀌지 않는 데이터

//변수 선언하기
//var currentYear;
//한꺼번에 선언하기
//var currentYear , birthYear, age ; 

//변수 선언과 값 할당
//var birthYear;
//birthYear = 1995;
//변수 선언과 값 할당 같이 하기
//var currentYear = 2021;


//나이 계산 프로그램만들기
// var currentYear =2024;
// var birthYear;
// var age;

// birthYear = prompt("태어난 연도를 입력. (YYYY)", "");
// age = currentYear - birthYear +1;
// document.write(currentYear + "년 현재<br>");
// document.write(birthYear +"년에 태어난 사람은" + age + "세 입니다.");


//10진수,8진수,16진수
//0-9로 표현, 0-7로 표현, 0-9,A-F로 표현

//큰 따옴표로 묶은 문자열 안에 또 다른 문자열을 넣으려고 할때
//큰 따옴표가 중복되지 않도록 작은 따옴표를 사용하기

//논리형
//boolean : 참 거짓 값을 표현하는 자료형
//undefined/null 
//값이 할당되지 않았다/데이터 값이 유효하지 않은 상태

//배열 :  하나의 변수에 값을 여러개 저장할 수 있다
//배열명["값1","깂2", ......]
//배열명[ ] ->빈 배열 선언

//var spring = "봄";
//var spring = "여름";
//var spring = "가을";
//var spring = "겨울";

//배열 사용
//var season = ["봄","여름","가을","갸울"];

//연산자
//산술 연산자
//currentYear - birthYear + 1
//currentYear , birthYear ,  1  (피연산자)
// + , - (연산자

//나누기 연산자, 나머지 연산자 비교하기
// var numberOne = 15 / 2;  -> 나눈 몫 7
// var numberTwo = 15 % 2;   -> 나머지 1

//증가 연산자
//var a =10
//var b = a++ + 5  / b는 15, a는 11

//할당 연산자
//=,+=,-=,*=,/=,%=

//연결연산자
//+ 기호를 사용하여 문자열 연결

//논리 연산자
//  or ||    : 하나만 true여도 true
//  and &&    :  모두 true일떄 true
//  NOT !    : 피연산자의 반댓값

//조건문
// if(조건) {조건 결과값이 true일때} else{조건 결과값이 false일때}


// var userNumber = prompt("숫자를 입력하세요");
//     if(userNumber % 3 == 0)
//     alert("3의 배수입니다");

//     else
//     alert("3의 배수가 아닙니다");

// var userNumber = prompt("숫자를 입력하세요");

// if(userNumber !== null) {
//     if(userNumber % 3 == 0 && userNumber > 0 )
//     alert("3의 배수 입니다");
//     else
//     alert("3의 배수가 아닙니다");
// }
//   else
//   alert("입력취소");

//조건 연산자로 조건 체크하기
//(조건) ? true일 때 실행할 명령 : false일 떄 실행할 명령

// var userNumber = prompt("숫자를 입력하세요");

// if(userNumber !== null)
//  (userNumber % 3 ==0 && userNumber > 0) ? alert("3의배수입니다") : alert("3의 배수가 아닙니다");
// else
// alert("입력취소");

//논리 연산자로 조건 체크하기
//or연산자 ||
// var num1 = prompt("50미만인 숫자를 입력해주세요");
// var num2 = prompt("50미만인 숫자를 입력해주세요");

// if(num1 < 10 || num2 < 10)
// alert("숫자 2개 중에서 최소한 하나는 10 미만입니다");
// else
// alert("숫자 2개 중에서 10 미만인 수가 없습니다");

//and 연산자
//&& 사용
 var num1 = prompt

























