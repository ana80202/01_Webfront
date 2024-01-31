 //적용하기 버튼이 클릭 되었을 때
 const applyBtn = document.querySelector("#apply-btn");

 const box = document.querySelector("#box"); //?

 applyBtn.addEventListener("click", function () {

     // 위에 작성된 input 요소들을 모두 얻어오기
     const boxWidth = document.querySelector("#box-width");
     const boxHeight = document.querySelector("#box-height");
     const fs = document.querySelector("#fs");

     const fw = document.querySelector("[name='fw']:checked ");   //체크 된 것만 가지고 오기

     const fontColor = document.querySelector("#box-font-color");
     const bgColor = document.querySelector("#box-bg-color");

     const row = document.querySelector("[name='align-row']:checked ");
     const col = document.querySelector("[name='align-col']:checked ");

     const content = document.querySelector("#content");
     const box = document.querySelector("#box");

     
     // input에 작성된 값을 얻어와서, 그 값에 따라 #box에 js로 css 추가

     //너비를 입력하는 input에 값이 작성되어 있다면
     if(boxWidth.value.trim().length > 0){
         //boxWidth라는 요소의 value값에 앞뒤로 공백 제거를 한 후 , 
         //value값의 문자열 길이를 따졌더니 , 0보다 클떄 ==> 뭔가 값이 있을때
         box.style.width = boxWidth.value + "px";
     }

     //높이를 입력하는 input애 값이 작성되어 있다면
     if(boxHeight.value.trim().length > 0){
         
         box.style.height = boxHeight.value + "px";
     }

     //글자 크기 입력하는 input
     if(fs.value.trim().length > 0){
         
         box.style.fontSize = fs.value + "px";
     }

     // fw -. 체크된게 없으면 null 반환
     //    -> 체크된게 있으면 null 아님
     if(fw != null) {  //글자 굵기가 체크된게 있다면
         console.log(fw);
         box.style.fontWeight = fw.value; 

     }


     //글자색
     if(fontColor.value.trim().length > 0){
         
         box.style.color = fontColor.value ;
     }


     
     //배경색
     if(bgColor.value.trim().length > 0){
         
         box.style.backgroundColor = bgColor.value;      
     }

       

      //content에 작성된 값
       if(content.value.trim().length > 0) {
         box.innerText = content.value;
       }


       //가로 정렬
    if(row != null){
        console.log(row);
        box.style. textAlign = row.value;

    }
     
      //세로 정렬
    if(col != null){
        console.log(col);
        box.style.   verticalAlign  = col.value;
    }

 
 })

   





