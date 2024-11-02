const footer = document.querySelector('footer'); // 헤더

// ======================================================================
// 푸터 넣기)

const footerStr = `        
<div class="footerWrapper">
    <div class="footer_top">
        <div class="topLeft">
            <a href="">기업 및 단체구매안내</a>
            <a href="">가맹상담신청</a>
            <a href="">사이버신문고</a>
        </div>

        <div class="topRight">
            <div class="Address">
                <b>Address</b>
                <span>서울특별시 중구 을지로 170, 8층(을지로4가, 을지트윈타워)투썸플레이스(주)</span>
            </div>

            <div class="CustomerCenter">
                <b>Customer Center</b>
                <ul>
                    <li>고객센터 : 1577-4410 </li>
                    <li>팩스 : 02-2058-6777</li>
                </ul>
            </div>
        </div>
        
    </div><!-- footer_top -->

    <div class="footer_bottom">
        <ul class="footer_bottom_menu_Btn">
            <li><a href="#">이용약관</a></li>
            <li><a class="YellowFont" href="#">개인정보처리방침</a></li>
            <li><a href="#">위치기반서비스 이용약관</a></li>
            <li><a href="#">이메일 무단수집거부</a></li>
            <li><a href="#">법적고지</a></li>
            <li><a href="#">사업자정보확인</a></li>
        </ul>

        <ul class="grayInfo">
            <li>대표이사 : 이영상 </li>
            <li>개인정보보호책임자 : 정병구 </li>
            <li>사업자등록번호 : 404-86-01054</li>
        </ul>

        <ul class="grayInfo">
            <li>통신판매업종신고증 : 제 2018-서울중구-0353호 </li>
            <li>대표이메일 : helpmaster@twosome.co.kr</li>
        </ul>

        <ul class="grayInfo">
            <li>Copyright ⓒ 2021 A TWOSOME PLACE Co., LTD. All Rights Reserved.</li>
            <li>All Rights Reserved.</li>
        </ul>
    </div>

    
    <ul class="footer_bottom_snsIcons">
        <li><a href="https://instagram.com/atwosomeplace_official?igshid=1vu3rl2z5ps7n" target="_blank"><img src="../footer/img/icon_footerSns_instagram.svg" alt="인스타그램_로고_관련페이지로 이동"></a></li>
        <li><a href="https://www.youtube.com/channel/UCDjdk0ufvcvV08hAm_vF06Q" target="_blank"><img src="../footer/img/icon_footerSns_youtube.svg" alt="유튜브_로고_관련페이지로 이동"></a></li>
        <li><a href="https://twitter.com/TWOSOMEsays" target="_blank"><img src="../footer/img/icon_footerSns_twitter.svg" alt="트위터_로고_관련페이지로 이동"></a></li>
    </ul>
</div>
`
footer.innerHTML = footerStr;
