window,addEventListener("load", function(){
    //이 코드는 모든 리소스가 로드된 후에 실행된다
    console.log("Script Start");

    let startTime = new Date().getTime();
    let delay = 3000;

    //3초 동안 브라우저 블로킹
    while (new Date().getTime() < startTime + delay){
        //여기 while문 안에서 startTime + dealy(시작시간 + 3초) 보다 작은 시간 동안 계속 이 블록 내에서 루프를 돌린다.
    }
    console.log("Script End")
    console.log("모든 리소스가 로드되었습니다")
});