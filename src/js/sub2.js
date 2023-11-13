$(function () {
  $(window).scroll(function () {
    let wdb = $(this).scrollTop();
    console.log(wdb);

    if (wdb < 450) {
      if (window.matchMedia("(min-width:1200px)").matches) {
        $("#fixed_main").css("width", 1200 + 2 * wdb);
        $("#fixed_main .cover").css("width", 1200 + 2 * wdb);
        $("#fixed_main .cover").css("opacity", wdb * 0.0014);
      } else if (
        window.matchMedia("(min-width:770px) and (max-width:1199px)").matches
      ) {
        $("#fixed_main").css("width", `${90 + 0.05 * wdb}%`);
        $("#fixed_main .cover").css("width", `${90 + 0.05 * wdb}%`);
      } else if (window.matchMedia("(max-width:769px)").matches) {
        $("#fixed_main").css("width", `${90 + 0.04 * wdb}%`);
        $("#fixed_main .cover").css("width", `${90 + 0.05 * wdb}%`);
      }

      $("#fixed_main .cover").css("opacity", wdb * 0.0014);
    }

    let box1 = $(".box1").offset().top;
    let box2 = $(".box2").offset().top;
    let box3 = $(".box3").offset().top;
    let box4 = $(".box4").offset().top;

    // console.log(box1)

    if (wdb > box1 - 950) {
      $(".box1").css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (wdb > box2 - 650) {
      $(".box2").css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (wdb > box3 - 650) {
      $(".box3").css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (wdb > box4 - 670) {
      $(".box4").css("transform", "translateY(0px)").css("opacity", "1");
    }

    let spot1 = $(".img_box1 img").offset().top;
    let spot2 = $(".img_box2 > img").offset().top;
    let spot3 = $(".img_box3 > img").offset().top;
    let spot4 = $(".img_box4 > img").offset().top;
    let spot5 = $(".img_box5 > img").offset().top;
    let spot6 = $(".img_box6 > img").offset().top;
    let spot7 = $(".img_box7 > img").offset().top;
    let spot8 = $(".img_box8 > img").offset().top;

    if (wdb > spot1 - 600) {
      $(".img_box1 img")
        .css("transform", "translateX(0px)")
        .css("opacity", "1");
    }

    if (wdb > spot2 - 700) {
      $(".img_box2 > img")
        .css("transform", "translateX(0px)")
        .css("opacity", "1");
    }

    if (wdb > spot3 - 650) {
      $(".img_box3 > img")
        .css("transform", "translateX(0px)")
        .css("opacity", "1");
    }

    if (wdb > spot4 - 600) {
      $(".img_box4 > img")
        .css("transform", "translateX(0px)")
        .css("opacity", "1");
    }

    if (wdb > spot5 - 600) {
      $(".img_box5 > img")
        .css("transform", "translateX(0px)")
        .css("opacity", "1");
    }

    if (wdb > spot6 - 900) {
      $(".img_box6 > img")
        .css("transform", "translateX(0px)")
        .css("opacity", "1");
    }

    if (wdb > spot7 - 700) {
      $(".img_box7 > img")
        .css("transform", "translateX(0px)")
        .css("opacity", "1");
    }

    if (wdb > spot8 - 600) {
      $(".img_box8 > img")
        .css("transform", "translateX(0px)")
        .css("opacity", "1");
    }
  });

  //버튼 불러오기
  const button = document.querySelectorAll(".btn");

  //이동구역
  const conts = document.getElementById("mid_banner");
  const place = document.getElementById("mid_info");
  const slide = document.getElementById("sliding");
  const notice = document.getElementById("notice");

  button[0].addEventListener("click", function () {
    conts.scrollIntoView({ behavior: "smooth" });
  });
  button[1].addEventListener("click", function () {
    place.scrollIntoView({ behavior: "smooth" });
  });
  button[2].addEventListener("click", function () {
    slide.scrollIntoView({ behavior: "smooth" });
  });
  button[3].addEventListener("click", function () {
    notice.scrollIntoView({ behavior: "smooth" });
  });
});
