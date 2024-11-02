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
          sec2_mobile_topExLi = document.querySelectorAll('.menuStory ul.topEx_mobile>li'), // 2sec 모바일 탭설명
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
const view = document.querySelector("#view"), // 모든 sec의 묶음인 div.wrapper과 footer의 묶음
             AllSec = view.querySelectorAll("div.wrapper>section.floor"),
             fullPage = document.querySelector('.fullPage'), // 옆에 01 ~ 06 페이지 알려주는 애
             prevNum = fullPage.querySelector('span.pageNum:nth-of-type(1)'), // 현재 페이지
             allNum = fullPage.querySelector('span.pageNum:nth-of-type(2)'), // 전체 페이지
             progressAllBar = fullPage.querySelector('p'), // 페이지의 전체 선(틀)
             progressBar = fullPage.querySelector('p>span'), // 페이지 움직이는 선
             topBtn = document.querySelector('.wrapper_Btn > .moveScrollTop_btn'),
             footer = document.querySelector('footer'),
             header = document.querySelector('header');


let floor = 0;
document.body.style = `height: ${view.offsetHeight}px;`;

// firstLoadY: 처음 로드시 현재 위치 구하기
let firstLoadY = Math.floor(window.scrollY + window.innerHeight/2);
// y는 현재 위치 // prev_y는 스크롤 이전 위치 // statues: 내리는중(true), 올리는 중(false)
let pos = {y: firstLoadY, prev_y: firstLoadY, status: true};


// 크기 변화시 발생할 것들
let AllFloorArr = [];

md[0].addEventListener('change', () => {
    // AllFloorArr에 모든 sec과 footer의 스크롤 높이 받기(6개 + 1개 = 7개)
    AllFloorArr = [];
    AllSec.forEach((elSec)=>{
        console.log(elSec.getBoundingClientRect().y, window.scrollY);
        AllFloorArr.push(Math.floor(elSec.getBoundingClientRect().y + window.scrollY));
    })
    AllFloorArr.push(Math.floor(footer.getBoundingClientRect().y + window.scrollY));
    console.log(AllFloorArr);

    if(md[0].matches){// '모바일' -> 'PC + 태블릿'

        // 현재 위치 구하기
        pos.y = Math.floor(window.scrollY + window.innerHeight/2);
        // 7번 반복해서
        for(let k = 0; k < AllFloorArr.length-1; k++){
            // 현재 무슨 층인지 구분
            if(AllFloorArr[k+1] > pos.y && pos.y >= AllFloorArr[k]) floor = k;
        }//for(let k = 0; k < AllFloorArr.length-1; k++)

        if(floor <= 5){// sec부분으로 내려갈 때
            // 스크롤 페이지네이션 변화주기
            prevNum.innerText = `0${floor+1}`;
            let progressAllBarHeight = window.getComputedStyle(progressAllBar).height;  // Window.getComputedStyle() 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 반환 // style속성의 height값이 아닌 css의 height값을 구하기 위해 씀
            progressAllBarHeight = progressAllBarHeight.slice(0, progressAllBarHeight.indexOf('px')); // 0 ~ 'px'있는 인덱스 이전까지의 문자열(= progressAllBar의 Height 숫자값) 반환 
            progressBar.style = `height: ${(progressAllBarHeight/6)*(floor+1)}px;`;

            // view 내리기(스크롤)
            window.scrollTo(0, 0);
            view.style = `transform: translateY(calc(-100vh*${floor})); transition: none';`;
        }
        
        if(floor == 0) header.classList.add('firstFloor');    

    }else{// 'PC + 태블릿' -> '모바일'
        view.style = `transform: translateY(0%); transition: none';`;
        console.log(floor, AllFloorArr[floor]);
        console.log(AllSec[floor]);
        setTimeout(() => {
            AllSec[floor].scrollIntoView({
                inline: "center",
                block: "center"
            })//AllSec[floor].scrollIntoView
        }, 10)
        
    }//else

});
window.addEventListener('resize', () => {
    if(md[1].matches){
        document.body.style = `height: ${view.offsetHeight}px;`;
    }
})
  
let timer; // 디바운싱을 위한 timer
window.addEventListener('wheel', function(e){
    if(md[0].matches){// 'PC + 태블릿' 에서만
        e.preventDefault(); // 스크롤 안 함
    
        if(timer) clearTimeout(timer); /* 디바운싱 */
        
        timer = setTimeout(() => { 
            pos.status = e.wheelDelta < 0 ? true : false;
        
            if(pos.status){ //스크롤을 내리면
                if(floor < 6) floor++;
            }else{          //스크롤을 올리면
                if(floor > 0) floor--;
            }
    
            if(floor <= 5){// sec부분으로 내려갈 때
                // 스크롤 페이지네이션 변화주기
                prevNum.innerText = `0${floor+1}`;
                let progressAllBarHeight = window.getComputedStyle(progressAllBar).height;  // Window.getComputedStyle() 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 반환 // style속성의 height값이 아닌 css의 height값을 구하기 위해 씀
                progressAllBarHeight = progressAllBarHeight.slice(0, progressAllBarHeight.indexOf('px')); // 0 ~ 'px'있는 인덱스 이전까지의 문자열(= progressAllBar의 Height 숫자값) 반환 
                progressBar.style = `height: ${(progressAllBarHeight/6)*(floor+1)}px;`;
    
                // view 내리기(스크롤)
                view.style = `transform: translateY(calc(-100vh*${floor}));`;
            }else{// footer부분으로 내려갈 때
    
                // view 내리기(스크롤)
                document.body.style = `height: ${view.offsetHeight}px;`;
    
                let footerHeight = window.getComputedStyle(footer).height;
                view.style = `transform: translateY(calc(-100vh*${(floor-1)} - ${footerHeight}));`;
            }
            
            header.classList.remove('firstFloor');
            if(floor == 0){
                header.classList.add('firstFloor');
            }
    
        }, 300);//timer = setTimeout

    }// if(md[0].matches)
}, {passive : false});//window.addEventListener // addEventListener의 매개변수 options객체의 passive는 true이면 preventDefault()를 호출 못하게 함 // passive 기본값 false지만, 대부분의 브라우저에서 wheel, mousewheel, touchstart, touchmove이벤트에서는 기본값이 true라서, preventDefault()를 쓰기 위해 직접적으로 {passive : false}써줌


// top버튼 클릭시
topBtn.onclick = () => {
    if(md[0].matches){// 'PC + 태블릿' 에서만
        floor = 0;

        prevNum.innerText = `0${floor+1}`;
        let progressAllBarHeight = window.getComputedStyle(progressAllBar).height;
        progressAllBarHeight = progressAllBarHeight.slice(0, progressAllBarHeight.indexOf('px'));
        progressBar.style = `height: ${(progressAllBarHeight/6)*(floor+1)}px;`;

        view.style = `transform: translateY(${floor}%);`;
        header.classList.add('firstFloor');
    }
    // else{// '모바일' 에서만
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //     })
    // }

}//topBtn.onclick

// ----------------------------------------------------------------------

// <script>
// Hmd = matchMedia('(min-width: 1285px)');

// let headerHover = function(){
//     header.onmouseenter = function(){ //마우스 호버
//         if(Hmd.matches) header.classList.remove('firstFloor');
//     }//header.onmouseenter

//     header.onmouseleave = function(){//호버 취소
//         if(Hmd.matches){
//             if(floor == 0){
//                 header.classList.add('firstFloor');
//             }
//         }
//     }//header.onmouseleave
// }//headerHover() 함수정의

/* let headerHover = function(){
    header.onmouseenter = function(){ //마우스 호버
        header.classList.remove('firstFloor');
    }//header.onmouseenter

    header.onmouseleave = function(){//호버 취소
            if(floor == 0){
                header.classList.add('firstFloor');
            }
    }//header.onmouseleave
}//headerHover() 함수정의 */

// headerHover();
// Hmd.addListener(headerHover);

// </script>


history.scrollRestoration = "manual"; // 새로고침 시 항상 top:0 위치로 이동된다. // 새로고침시 transform: translateY();는 리셋되었는데, 스크롤이 그 위치로 가는 문제점을 막기 위함


















