const md = [
    window.matchMedia(`(min-width: 897px)`), // PC + 태블릿
    window.matchMedia(`(max-width: 896px)`)   // 모바일
];

const elHeaderBtn = document.querySelector('header>.head_El>.head_right>div.verMenu_btn'), // 세로메뉴버튼
      elNav = document.querySelector('nav'), // 세로메뉴
      nav_elXBtn = document.querySelector('nav>div.head_gnb_vertical_top_Wrap>div.xBtn'), // 세로 x버튼
      nav_elUl = document.querySelector('nav>ul.head_gnb_vertical'), // nav 큰 메뉴(GNB) 묶음
      nav_elLi = document.querySelectorAll('nav>ul.head_gnb_vertical > li'), // nav 큰 메뉴(GNB) 모음
      nav_elA = document.querySelectorAll('nav>ul.head_gnb_vertical > li > a'); // nav 큰 메뉴(GNB)의 큰 글씨

// ======================================================================

// nav 메뉴 버튼 클릭한 거 초기화 함수)
const nav_reset = () => {
    nav_elLi.forEach(li => {
        li.classList.remove('active', 'gray');
    });
}//nav_reset() 함수정의

// nav 옆으로 열기
elHeaderBtn.onclick = function(){
    elNav.classList.add('active');
}
// nav 닫기
nav_elXBtn.onclick = function(){
    elNav.classList.remove('active');
    nav_reset(); // nav 클릭한 거 초기화
}

// ↓ nav_menuMouseenterFun()함수(* 'PC + 태블릿' mouseenter) 에 사용
let nav_preKey = 0; 

// nav 소메뉴 나오는 함수 (* '모바일' click 에서만 쓰일 듯함))
const nav_menuFun = (k) => {
    // 클릭한 Li메뉴에 'active'클래스가 존재하는지(= 소메뉴가 열려있는지)의 boolean 값
    const isActive = nav_elLi[k].classList.contains('active');

    // 모든 li에서 'active'와 'gray' 클래스 제거(소메뉴 전부닫고, 전부 하얗게 만들기) // 꼭 isActive 얻어낸 후, 리셋해야함
    nav_reset();

    // 소메뉴가 닫힌 Li메뉴를 클릭한 경우)
    if(!isActive){
        // 클릭한 Li메뉴에 'active' 클래스 추가
        nav_elLi[k].classList.add('active');

        // 클릭했던 li태그를 제외한, 나머지 Li메뉴에 'gray' 클래스 추가
        nav_elLi.forEach((li, liKey) => {
            if(liKey !== k) li.classList.add('gray');
        });
    }//if(!isActive)

    nav_preKey = k;
}//nav_menuFun(k)

// nav 소메뉴 나오는 함수 (* 'PC + 태블릿' mouseenter 에서만 쓰일 듯함))
const nav_menuMouseenterFun = (k) => {
    // 모든 li메뉴 회색으로
    nav_elLi.forEach((li) => {
        li.classList.add('gray');
    });

    // 이전 li소메뉴 닫기
    nav_elLi[nav_preKey].classList.remove('active');
    // 현재 li소메뉴 열고, 현재 li메뉴 흰색으로
    nav_elLi[k].classList.add('active');
    nav_elLi[k].classList.remove('gray');

    nav_preKey = k;
}//nav_menuMouseenterFun() 함수정의

nav_elA.forEach((elA, k)=>{

    // 'PC + 태블릿' mouseenter 에서만
    elA.onmouseenter = () => {
        if(md[0].matches){
            nav_menuMouseenterFun(k);
        }//if(md[0].matches)
    };

    // '모바일' click 에서만
    elA.onclick = (e) => {
        e.preventDefault();

        if(md[1].matches){
            nav_menuFun(k);
        }
    }//elA.onclick
})//nav_elA.forEach((elA, k)

// 'PC + 태블릿' mouseleave 에서만
nav_elUl.onmouseleave = () => {
    if(md[0].matches){
        nav_elLi.forEach(li => {
            li.classList.remove('gray');
        });
    }//if(md[0].matches)
}//nav_elUl.onmouseleave

// 'PC + 태블릿' -> '모바일' 로 화면전환 했을 때만 리셋
md[1].addEventListener('change', () => {
    if(md[1].matches){
        nav_reset();
    }
})//md[1].addEventListener('change',

// ----------------------------------------------------------------------

const sec2_tapBtns = document.querySelectorAll('.menuStory ul.text_btn>li'), // 2sec 글씨버튼 모음
      sec2_ElUls = document.querySelectorAll('.menuStory div.img_slides>ul'), // 2sec 이미지 슬라이드 모음
      sec2_mobile_topExLi = document.querySelectorAll('.menuStory ul.topEx_mobile>li'), // 2sec   모바일 탭설명
      sec2_Elpagination = document.querySelector('.menuStory .img_slide_pagination'), // 2sec 페이지네이션
      sec2_ElLeftBtn = sec2_Elpagination.querySelector('.leftBtn'), // 2sec 페이지네이션 왼쪽버튼
      sec2_ElRightBtn = sec2_Elpagination.querySelector('.rightBtn'), // 2sec 페이지네이션 오른쪽버튼
      sec2_ElPageName = sec2_Elpagination.querySelector('span'); // 2sec 페이지네이션 글씨(메뉴이름)


    let sec2_UlIdx = 0, // 현재 Ul 인덱스
        prev_UlIdx = 0;

    let sec2_LiIdx = 0, // 현재 Ul의 현재 Li 인덱스
        prev_LiIdx = 0; // 이전 인덱스

    // ElLis_Array에 메뉴 이미지 li모음 3개(커피, 디저트, 델리) 넣기
    const ElLis_Array = [];
    sec2_ElUls.forEach((elUl) => {
        const ElLis = elUl.querySelectorAll('li');

        ElLis_Array.push(ElLis);
    });

    // sec2 현재 활성화된 Ul슬라이드 작동 함수(* sec2 페이지네이션 버튼에 쓰임))
    const sec2_SlideFun = (text) => {
        const ElLis = ElLis_Array[sec2_UlIdx]; // '현재 활성화 된 이미지 슬라이드'의 이미지 li들

        if(text == "prev"){
            sec2_LiIdx > 0 ? sec2_LiIdx-- : sec2_LiIdx = ElLis.length-1;
        }else{ // text == "next"
            sec2_LiIdx < ElLis.length-1 ? sec2_LiIdx++ : sec2_LiIdx = 0;
        }

        sec2_ElUls[sec2_UlIdx].style = `transform: translateX(calc(100% * -${sec2_LiIdx}));`;
        ElLis[prev_LiIdx].classList.remove('active'); // 이전에 활성화 됐던 이미지 작아짐
        ElLis[sec2_LiIdx].classList.add('active'); // 현재 활성화된 이미지 커짐
        sec2_ElPageName.innerText = ElLis[sec2_LiIdx].dataset.name; // 페이지 네이션 현재 활성화된 메뉴 이름으로 바뀜

        prev_LiIdx = sec2_LiIdx;
    };//sec2_SlideFun() 함수정의

    // prev버튼 누를시
    sec2_ElLeftBtn.onclick = function(){
        sec2_SlideFun("prev");
    };//sec2_ElLeftBtn.onclick

    // next버튼 누를시
    sec2_ElRightBtn.onclick = function(){
        sec2_SlideFun("next");
    };//sec2_ElRightBtn.onclick

    // 각 탭버튼(COFFEE STORY, DESSERT STORY, DELI STORY)에 클릭리스너 등록
    sec2_tapBtns.forEach(function(ele, key){
        ele.onclick = function(){
            sec2_UlIdx = key; // 현재 클릭한 탭버튼 Idx

            // 탭 active
            sec2_tapBtns[prev_UlIdx].classList.remove('active'); // 이전 활성화 됐던 탭버튼 비활성화
            sec2_tapBtns[sec2_UlIdx].classList.add('active'); // 현재 활성화된 탭버튼 활성화
            sec2_mobile_topExLi[sec2_UlIdx].classList.add('active');

            // Ul active
            sec2_ElUls[prev_UlIdx].classList.remove('active'); // 이전 활성화 됐던 이미지슬라이드 비활성화
            sec2_ElUls[sec2_UlIdx].classList.add('active'); // 현재 활성화된 이미지슬라이드 활성화

            // 새로 Ul보여줄 때 li초기화
            sec2_LiIdx = 0;
            const prev_ElLis = ElLis_Array[prev_UlIdx], // 이전 활성화 됐던 슬라이드 li모음
                  ElLis = ElLis_Array[sec2_UlIdx]; // 현재 활성화된 슬라이드 li모음

            // 이전 활성화 됐던 슬라이드 초기화
            sec2_ElUls[prev_UlIdx].style = `transform: translateX(0%);`;
            prev_ElLis[prev_LiIdx].classList.remove('active');
            sec2_mobile_topExLi[prev_UlIdx].classList.remove('active');

            // 현재 활성화된 슬라이드 li 첫번째(sec2_LiIdx == 0) 활성화(이미지 커짐)
            ElLis[sec2_LiIdx].classList.add('active'); 

            // 현재 활성화된 슬라이드 li 첫번째(sec2_LiIdx == 0) 메뉴이름 페이지네이션에 나타내기
            sec2_ElPageName.innerText = ElLis[sec2_LiIdx].dataset.name;
        
            prev_LiIdx = sec2_LiIdx; // 이전 '슬라이드 li인덱스' 0으로 초기화(sec2_LiIdx == 0)
            prev_UlIdx = sec2_UlIdx; // 이전 '슬라이드 Ul인덱스' 현재 클릭한 것으로 초기화
        };//ele.onclick
    });//sec2_tapBtns.forEach

// ----------------------------------------------------------------------

// Swiper JS )
// Initialize Swiper)

// sec1 Swiper
const swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
    on:{
        slideChange: function(e){
            const elPage = document.querySelector('section.main .pagination_pageNumber');
            elPage.innerHTML = `<span>${e.realIndex+1}</span> <span>/</span> <span>${e.slides.length}</span>`
        }
    }
});//.mySwiper

// sec4 Swiper
const brandSupport_swiper = new Swiper(".brandSupport_Swiper", {
    loop: true,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-btn-next_4",
        prevEl: ".swiper-btn-prev_4",
    },
    on:{
        slideChange: function(e){
        const elPage = document.querySelector('section.brandSupport .pagination_pageNumber');
        elPage.innerHTML = `<span>${e.realIndex+1}</span> <span>/</span> <span>${e.slides.length}</span>`
        }
    }

});//.brandSupport_Swiper

// sec6 Swiper 모바일
const newAndNotice_swiper = new Swiper(".newAndNotice_Swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-btn-next_6",
        prevEl: ".swiper-btn-prev_6",
    },
    on:{
        slideChange: function(e){
        const elPage = document.querySelector('section.newAndNotice .pagination_pageNumber');
        elPage.innerHTML = `<span>${e.realIndex+1}</span> <span>/</span> <span>${e.slides.length}</span>`
        }
    }
});

// ----------------------------------------------------------------------

// 스크롤)
const allFloorWrapper = document.querySelector("#allFloorWrapper"), // 모든 sec의 묶음과 footer의 묶음
             fullPage = document.querySelector('div.fullPage'), // 우측 진행바 전체 묶음
             prevNum = fullPage.querySelector('span.pageNum:nth-of-type(1)'), // 진행바의 현재 페이지
             allNum = fullPage.querySelector('span.pageNum:nth-of-type(2)'), // 진행바의 전체 페이지
             progressAllBar = fullPage.querySelector('p'), // 진행바의 전체 선(틀)
             progressBar = fullPage.querySelector('p>span'), // 진행바 움직이는 선
             topBtn = document.querySelector('.wrapper_Btn > .moveScrollTop_btn'), // 탑버튼
             footer = document.querySelector('footer'), // 푸터
             header = document.querySelector('header'), // 헤더
             wrapperBtn = document.querySelector('div.wrapper_Btn'); // 버튼 묶음

let floor = 0; // 현재 페이지(층)
let firstBoolean = true; // 첫 로드인지 알려주는 boolean값

const firstFloorFun = (bool) => {
    if(md[0].matches){// 'PC + 태블릿' 에서만
        bool ? header.classList.add('firstFloor') : header.classList.remove('firstFloor');
    }//if(md[0].matches)

}//firstFloorFun() 함수정의

const lastFloorFun = (bool) => {
    if(md[0].matches){// 'PC + 태블릿' 에서만
        if(bool){
            header.classList.add('lastFloor');
            wrapperBtn.classList.add('lastFloor');
        }else{
            header.classList.remove('lastFloor');
            wrapperBtn.classList.remove('lastFloor');
        }
    }//if(md[0].matches)
}//lastFloorFun() 함수정의

// 우측 진행바 함수 정의)
const progressFun = (floor) => {
    if(floor < 6){// sec부분으로 내려갈 때
        // 스크롤 페이지네이션 변화주기
        prevNum.innerText = `0${floor+1}`;
        let progressAllBarHeight = window.getComputedStyle(progressAllBar).height;  // Window.getComputedStyle() 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 반환 // style속성의 height값이 아닌 css의 height값을 구하기 위해 씀
        progressAllBarHeight = progressAllBarHeight.slice(0, progressAllBarHeight.indexOf('px')); // 0 ~ 'px있는 인덱스 이전'까지의 문자열(= progressAllBar의 Height 숫자값) 반환 
        progressBar.style = `height: ${(progressAllBarHeight/6)*(floor+1)}px;`;
    }//if(floor < 6)

}//progressFun() 함수정의
  
const myFullpage = new fullpage('#allFloorWrapper', {
    anchors: ['0', '1', '2', '3', '4', '5', '6'], // '0'~'5': sec, '6': footer
    responsiveWidth: 897, // 897px미만부터 전체페이지 해제

    // callback
    afterRender: function(){ 
        const firstHash = window.location.hash;
        floor = Number(firstHash.slice(firstHash.indexOf('#')+1)); // #? #이후의 숫자 알아내기
    },//afterRender
    onLeave: function(origin, destination, direction, trigger){
        
        if(firstBoolean){// 첫 로드후 슬라이드
            firstBoolean = false;

            if(floor == 0) floor++; 
            if(floor == 6) {
                progressFun(5);
                lastFloorFun(true);
            } // footer 로드 경우
            firstFloorFun(false); // 슬라이드가 0에서 시작하지 않는다면 무조건 내려간다는 뜻이니 'firstFloor'제거
            
        }else{// 첫 로드가 아닌, 슬라이드
            if(direction == 'down'){ // 스크롤을 내리면 
                if(floor == 5) lastFloorFun(true);
                if(floor < 6) floor++;  
                firstFloorFun(false);
            }else{                  // 스크롤을 올리면
                if(floor == 1) firstFloorFun(true);
                if(floor == 6) lastFloorFun(false);
                if(floor > 0) floor--;
            }
           

        }//else

        progressFun(floor);
    }//onLeave
});

// top버튼 클릭시
topBtn.onclick = () => {
    const preFloor = floor; 

    floor = 0;
    progressFun(floor);
    fullpage_api.moveTo('0'); // '0' anchors로 이동 // 왜인지 anchors만 되고, 인덱스는 안됨

    if(md[0].matches){// 'PC + 태블릿' 에서만
        header.classList.add('firstFloor');
        if(preFloor == 6) lastFloorFun(false);
    }//if(md[0].matches)

}//topBtn.onclick

md[0].addEventListener('change', () => {
    if(md[0].matches){// '모바일' -> 'PC + 태블릿'
        const firstHash = window.location.hash;
        floor = Number(firstHash.slice(firstHash.indexOf('#')+1)); // #? #이후의 숫자 알아내기

        if(floor == 0){
            firstFloorFun(true);
        }else{
            firstFloorFun(false);
        } 
        if(floor == 6) lastFloorFun(true);
    }else{            // 'PC + 태블릿' -> '모바일'
        header.classList.remove('firstFloor');
        header.classList.remove('lastFloor');
        wrapperBtn.classList.remove('lastFloor');
    }
})//md[0].addEventListener('change',

// ----------------------------------------------------------------------

//history.scrollRestoration = "manual"; // 새로고침 시 항상 top: 0 위치로 이동된다. // 새로고침시 transform: translateY();는 리셋되었는데, 스크롤이 그 위치로 가는 문제점을 막기 위함


let setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}//setViewportHeight() 함수정의

setViewportHeight();

// 창 크기가 바뀔 때마다 업데이트
// window.addEventListener('resize', setViewportHeight);
















