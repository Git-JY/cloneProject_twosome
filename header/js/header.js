const md = [
    window.matchMedia(`(min-width: 897px)`), // PC + 태블릿
    window.matchMedia(`(max-width: 896px)`)   // 모바일
];

const header = document.querySelector('header'), // 헤더
      elNav = document.querySelector('nav'); // 세로메뉴

// ======================================================================
// 헤더 넣기)

const headerStr = `
    <div class="head_El">
        
        <h1 class="Logo">
            <a href="../HomePage/index.html"></a>
        </h1>
        
        <ul class="head_gnb_horizontal">
            <li>         
                <a href="../gnb1_intro/index.html">투썸플레이스 소개</a>
                <ul class="head_lnb"> 
                    <li><a href="../gnb1_intro/index.html">투썸플레이스</a></li>
                    <li><a class="mini" href="../gnb1_intro/index.html">비전체계</a></li>
                    <li><a class="mini" href="../gnb1_intro/index.html">연혁</a></li>
                    <li><a class="mini" href="../gnb1_intro/index.html">BI</a></li>
                    <li><a class="mini" href="../gnb1_intro/index.html">20주년 이야기</a></li>
                    <li><a class="mini" href="../gnb1_intro/index.html">Recruit</a></li>

                    <li class="firstLnb"><a href="../gnb1_intro/index.html">매장</a></li>
                    <li><a class="mini" href="../gnb1_intro/index.html">DT/DI</a></li>

                    <li class="firstLnb"><a href="../gnb1_intro/index.html">브랜드 브로슈어</a></li>
                </ul>
            </li>

            <li>         
                <a href="../gnb2_menu/index.html">메뉴이야기</a>
                <ul class="head_lnb"> 
                    <li><a href="../gnb2_menu/index.html">커피이야기</a></li>
                    <li><a href="../gnb2_menu/index.html">디저트이야기</a></li>
                    <li><a href="../gnb2_menu/index.html">델리이야기</a></li>
                </ul>
            </li>

            <li>         
                <a href="../gnb3_brand/index.html">브랜드 지원</a>
                <ul class="head_lnb"> 
                    <li><a href="../gnb3_brand/index.html">어썸 페어링 플랜트</a></li>
                    <li><a href="../gnb3_brand/index.html">어썸 디저트 플랜트</a></li>
                    <li><a href="../gnb3_brand/index.html">C&D센터</a></li>
                    <li><a href="../gnb3_brand/index.html">SEP센터</a></li>
                </ul>
            </li>

            <li>         
                <a href="../gnb4_appNmemberShip/index.html">투썸플레이스 앱 & 멤버십</a>
                <ul class="head_lnb"> 
                    <li><a href="../gnb4_appNmemberShip/index.html">투썸플레이스 앱 소개</a></li>
                    
                    <li><a href="../gnb4_appNmemberShip/index.html">투썸플레이스 멤버십</a></li>
                    <li><a class="mini" href="../gnb4_appNmemberShip/index.html">멤버십 소개</a></li>
                    <li><a class="mini" href="../gnb4_appNmemberShip/index.html">등급 및 혜택</a></li>
                </ul>
            </li>

            <li title="해당 웹페이지는 제작되지 않았습니다.">         
                <a href="">가맹점 창업안내</a>
                <ul class="head_lnb"> 
                    <li><a href="">가맹점 개설 안내</a></li>
                    <li><a href="">창업 설명회</a></li>
                    <li><a href="">온라인 창업상담신청</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">가맹점 전용 금융상품</a></li>
                </ul>
            </li>

            <li title="해당 웹페이지는 제작되지 않았습니다.">         
                <a href="">새소식 & 공지</a>
                <ul class="head_lnb"> 
                    <li><a href="">공지사항</a></li>
                </ul>
            </li>

        </ul>                     
                
        <div class="head_right">
            <div class="Language">English</div>
            <div class="verMenu_btn"></div>
        </div>                                 
    </div>

    <span class="info">* 주황 카테고리는 상세페이지 확인이 가능합니다.
    </span>
`
header.innerHTML = headerStr;

// ----------------------------------------------------------------------
// nav 넣기)

const navStr = `
    <div class="head_gnb_vertical_top_Wrap">
        <h1 class="Logo"></h1>
        <div class="xBtn"></div>
    </div>

    <ul class="head_gnb_vertical">
        <li>         
            <a href="../gnb1_intro/index.html">투썸플레이스 소개</a>
            <ul class="head_lnb"> 
                <li><a href="../gnb1_intro/index.html">투썸플레이스</a></li>
                <li class="mini"><a href="../gnb1_intro/index.html">비전체계</a></li>
                <li class="mini"><a href="#">연혁</a></li>
                <li class="mini"><a href="#">BI</a></li>
                <li class="mini"><a href="#">20주년 이야기</a></li>
                <li class="mini"><a href="#">Recruit</a></li>

                <li><a href="#">매장</a></li>
                <li class="mini"><a href="#">DT/DI</a></li>

                <li><a href="#">브랜드 브로슈어</a></li>
            </ul>
        </li>

        <li>         
            <a href="../gnb2_menu/index.html">메뉴이야기</a>
            <ul class="head_lnb"> 
                <li><a href="../gnb2_menu/index.html">커피이야기</a></li>
                <li><a href="#">디저트이야기</a></li>
                <li><a href="#">델리이야기</a></li>
            </ul>
        </li>

        <li>         
            <a href="../gnb3_brand/index.html">브랜드 지원</a>
            <ul class="head_lnb"> 
                <li><a href="../gnb3_brand/index.html">어썸 페어링 플랜트</a></li>
                <li><a href="#">어썸 디저트 플랜트</a></li>
                <li><a href="#">C&D센터</a></li>
                <li><a href="#">SEP센터</a></li>
            </ul>
        </li>

        <li>         
            <a href="../gnb4_appNmemberShip/index.html">투썸플레이스 앱 & 멤버십</a>
            <ul class="head_lnb"> 
                <li><a href="../gnb4_appNmemberShip/index.html">투썸플레이스 앱 소개</a></li>
                
                <li><a href="#">투썸플레이스 멤버십</a></li>
                <li class="mini"><a href="#">멤버십 소개</a></li>
                <li class="mini"><a href="#">등급 및 혜택</a></li>
            </ul>
        </li>

        <li>         
            <a href="#">가맹점 창업안내</a>
            <ul class="head_lnb"> 
                <li><a href="#">가맹점 개설 안내</a></li>
                <li><a href="#">창업 설명회</a></li>
                <li><a href="#">온라인 창업상담신청</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">가맹점 전용 금융상품</a></li>
            </ul>
        </li>

        <li>         
            <a href="#">새소식 & 공지</a>
            <ul class="head_lnb"> 
                <li><a href="#">공지사항</a></li>
            </ul>
        </li>

    </ul>

    <div class="head_gnb_vertical_bottom">
        <ul class="sideMenu">
            <li><a href="#">기업 및 단체구매안내</a></li>
            <li><a href="#">가맹상담신청</a></li>
            <li><a href="#">사이버신문고</a></li>
        </ul>
        <ul class="snsIcons">
            <li><a href="https://www.instagram.com/atwosomeplace_official/?igshid=1vu3rl2z5ps7n" target="_blank"><img src="../footer/img/icon_footerSns_instagram.svg" alt="인스타그램 로고"></a></li>
            <li><a href="https://www.youtube.com/channel/UCDjdk0ufvcvV08hAm_vF06Q" target="_blank"><img src="../footer/img/icon_footerSns_youtube.svg" alt="유튜브 로고"></a></li>
            <li><a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTWOSOMEsays" target="_blank"><img src="../footer/img/icon_footerSns_twitter.svg" alt="트위터 로고"></a></li>
        </ul>
    </div>

    <span class="info">* 주황 카테고리는 상세페이지 확인이 가능합니다.
    </span>
`
elNav.innerHTML = navStr;
// ======================================================================
// nav 스크립트)

const body = document.querySelector('body'),
      elHeaderBtn = document.querySelector('header>.head_El>.head_right>div.verMenu_btn'), // 세로메뉴버튼
      nav_elXBtn = document.querySelector('nav>div.head_gnb_vertical_top_Wrap>div.xBtn'), // 세로 x버튼
      nav_elUl = document.querySelector('nav>ul.head_gnb_vertical'), // nav 큰 메뉴(GNB) 묶음
      nav_elLi = document.querySelectorAll('nav>ul.head_gnb_vertical > li'), // nav 큰 메뉴(GNB) 모음
      nav_elA = document.querySelectorAll('nav>ul.head_gnb_vertical > li > a'); // nav 큰 메뉴(GNB)의 큰 글씨


// nav 메뉴 버튼 클릭한 거 초기화 함수)
const nav_reset = () => {
    nav_elLi.forEach(li => {
        li.classList.remove('active', 'gray');
    });
}//nav_reset() 함수정의

// nav 옆으로 열기
elHeaderBtn.onclick = function(){
    elNav.classList.add('active');
    body.classList.add('noScroll');
}
// nav 닫기
nav_elXBtn.onclick = function(){
    elNav.classList.remove('active');
    body.classList.remove('noScroll');
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
