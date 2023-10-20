//현재 URL 정보를 출력하는 함수
function showLocation(){
    let locationInfo = window.location.href;
    document.getElementById("info").textContent = "현재 URL:" +locationInfo;
}

//브라우저 정보를 출력하는 함수
function showNavigator(){
    let navigatorInfo = "브라우저 정보 :" + window.navigator.userAgent;
    document.getElementById("info").textContent = navigatorInfo;
}

//새로운 창 오픈
function openWindow(){
    window.open("http://naver.com","_blank", "width=500,height=500");
}