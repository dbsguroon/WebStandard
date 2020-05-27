      /* 라이트박스 */
      $(".lightgallery").lightGallery({
          thumbnail: true,
          autoplay: true,
          pause: 3000,
          progressBar: true,
      });

      /* 윈도우 팝업 */
      $('.window').click(function (e) {
          e.preventDefault();
          window.open("sample_windowpopup.html", "popup01",
              "width=800,height=590,left=50,top=50,scrollbars=0,toolbar=0,menubar=0");
      })

      /* 레이어 팝업 */
      $('.layer').click(function (e) {
          e.preventDefault();
          // $('#layer').css("display", "block");
          $('#layer').slideDown();
      });

      $('#layer .close').click(function (e) {
          e.preventDefault();
          // $('#layer').css("display", "none");
          $('#layer').slideUp();
      });

      /* 탭메뉴 */
      var $tab_list = $(".tab_menu");
      $tab_list.find("ul ul").hide();
      $tab_list.find("li.active > ul").show();

      function tab_Menu(e) {
          e.preventDefault();
          var $this = $(this);
          $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul")
              .hide();
      }

      $tab_list.find("ul>li>a").click(tab_Menu).focus(tab_Menu);

      /* 배너 */
      $('.ban').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          autoplay: true,
          autospeed: 3000,
      });

      /* 갤러리 */
      $('.gallery_img').slick({
          fade: true,
          pauseOnHover: true,
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 300,
          slidesToShow: 1
      });

      $('.play').click(function () {
          $('.gallery_img').slick('slickPlay')
      });

      $('.pause').click(function () {
          $('.gallery_img').slick('slickPause')
      });

      $('.prev').click(function () {
          $('.gallery_img').slick('slickPrev')
      });

      $('.next').click(function () {
          $('.gallery_img').slick('slickNext')
      });

      /* 전체 메뉴 */
      $(".tit .btn").click(function (e) {
          e.preventDefault();
          $("#cont_nav").slideToggle(500);
          /* 단추 버튼이 위아래로 바뀜 */
          $(this).toggleClass("on");
      });