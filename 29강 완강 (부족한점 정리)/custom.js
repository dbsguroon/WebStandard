 /* 라이트 박스 */
 $(".lightgallery").lightGallery({
     thumbnail: true,
     autoplay: true,
     pause: 3000,
     progressBar: true,
 });

 /* 윈도우 팝업 */
 $(".window").click(function (e) {
     e.preventDefault();
     window.open("sample_popup.html", "popup01",
         "width=800,height=590,left=50,top=50,scrollbars=0,toolbar=0,menubar=0");
 })

 /* 레이어 팝업 */
 $('.layer').click(function (e) {
     e.preventDefault();
     // $('#layer').css("display", "block")
     $('#layer').slideDown();
 });

 $('#layer .close').click(function (e) {
     e.preventDefault();
     // $('#layer').css("display", "none");
     $('#layer').slideUp();
 })


 /* 탭메뉴 */
 var $tab_list = $(".tab_menu");

 $tab_list.find("ul ul").hide();
 $tab_list.find("li.active > ul").show();

 function tabMenu(e) {
     e.preventDefault();
     var $this = $(this) // 즉 텝메뉴를 클릭하면 this에 저장되고 변수에담음
     $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
 }
 $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

 /* 배너 */
 $('.ban').slick({
     slidesToShow: 3,
     slidesToScroll: 3,
     // autoplay: false,
     // autoplaySpeed: 2000,
     dots: true,
 });

 /* 갤러리 */
 $(".gallery_img").slick({
     arrows: false,
     fade: true,
     // pauseOnHover: true,
     // infinite: true,
     // autoplay: true,
     // autoplaySpeed: 3000,
     // speed: 300,
     // slidesToShow: 1,

 });

 $(".play").click(function () {
     $(".gallery_img").slick('slickPlay');
 });

 $(".pause").click(function () {
     $(".gallery_img").slick('slickPause');
 });

 $(".prev").click(function () {
     $(".gallery_img").slick('slickPrev');
 });

 $(".next").click(function () {
     $(".gallery_img").slick('slickNext');
 });


 /* 전체 메뉴 */
 $(".tit .btn").click(function (e) {
     e.preventDefault();
     // $("#cont_nav").css("display", "block");
     //$("#cont_nav").show();
     //$("#cont_nav").fadeIn();
     //$("#cont_nav").slideDown();
     //$("#cont_nav").toggle();
     //$("#cont_nav").fadeToggle();
     $("#cont_nav").slideToggle(500);
     $(this).toggleClass("on");
 })