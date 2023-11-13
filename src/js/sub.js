
$(function () {
     
    //스크롤시 배너이미지 width 커짐
    $(window).scroll(function(){
        let wdb = $(this).scrollTop();
        console.log(wdb)
  
            if (wdb < 450) {
                if (window.matchMedia("(min-width:1200px)").matches) { 
                    $("#sticky").css("width", 1200 + 2.1 * wdb);
                    $("#sticky .cover").css("width", 1200 + 2.1 * wdb);               
               } else if (window.matchMedia("(min-width:700px) and (max-width:1199px)").matches) {               
                    $("#sticky").css("width", `${90 + 0.05 * wdb}%`);
                    $("#sticky .cover").css("width", `${90 + 0.05 * wdb}%`);               
                }else if (window.matchMedia("(max-width:699px)").matches) {               
                    $("#sticky").css("width", `${90 + 0.04 * wdb}%`);
                    $("#sticky .cover").css("width", `${90 + 0.05 * wdb}%`);               
                }
               
                $("#sticky .cover").css("opacity", wdb * 0.0014);          
            }
        
        //스크롤시 박스 올라오는 효과
        let box1 = $('.box:first-of-type').offset().top;
        let box2 = $('.box:nth-of-type(2)').offset().top;
        let box3 = $('.box:nth-of-type(3)').offset().top;
        let box4 = $('.box:last-of-type').offset().top;

        // console.log(box1)

        if (wdb > box1 - 950) {
            $('.box:first-of-type').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (wdb > box2 - 650) {
            $('.box:nth-of-type(2)').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (wdb > box3 - 650) {
            $('.box:nth-of-type(3)').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (wdb > box4 - 670) {
            $('.box:last-of-type').css("transform", "translateY(0px)").css("opacity", "1");
        }


        // spot 이미지 왼쪽에서 들어오는 효과

        let spot1 = $('.spot_img img:first').offset().top;
        let spot2 = $('.spot2 img:first').offset().top;
        let spot3 = $('.spot3 img:first').offset().top;
        let spot4 = $('#trans1 img').offset().top;
        let spot5 = $('#trans2 img').offset().top;
        let spot6 = $('#trans3 img').offset().top;
        let spot7 = $('#trans4 img').offset().top;
        let spot8 = $('#trans5 img').offset().top;


        if(wdb > spot1 - 600) {
            $('.spot_img img:first').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if(wdb > spot2 - 700) {
            $('.spot2 img:first').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if(wdb > spot3 - 650) {
            $('.spot3 img:first').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if(wdb > spot4 - 600) {
            $('#trans1 img').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if(wdb > spot5 - 600) {
            $('#trans2 img').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if(wdb > spot6 - 900) {
            $('#trans3 img').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if(wdb > spot7 - 700) {
            $('#trans4 img').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if(wdb > spot8 - 600) {
            $('#trans5 img').css("transform", "translateX(0px)").css("opacity", "1");
        }
    });

    

});
        //버튼 불러오기
        const button=document.querySelectorAll('.btn');

        //이동구역
        const conts=document.getElementById('conts');
        const place=document.getElementById('place');
        const slide=document.getElementById('sliding');
        const notice=document.getElementById('notice');

        button[0].addEventListener('click',function(){
            conts.scrollIntoView({behavior: "smooth"});
        });
        button[1].addEventListener('click',function(){
            place.scrollIntoView({behavior: "smooth"});
        });
        button[2].addEventListener('click',function(){
            slide.scrollIntoView({behavior: "smooth"});
        });
        button[3].addEventListener('click',function(){
            notice.scrollIntoView({behavior: "smooth"});
        });


