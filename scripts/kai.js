$(document).ready(function () {
    console.log('Kai working and all.')
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if($(window).scrollTop()>1000){
            $('.third-section-prop img').css({
                position:'fixed',
                top:'10%',
                transition:'all 5s',
                opacity:1
            })
        }
        else{
            $('.third-section-prop img').css({
                position:'relative',
                top:'10%',
                transition:'all 1s',
                opacity:0
            })
        }

        if($(window).scrollTop()>1536){
            $('.fourth-section-prop img').css({
                position:'fixed',
                top:'10%',
                transition:'all 0s',
                opacity:1
            })
        }
        else{
            $('.fourth-section-prop img').css({
                position:'relative',
                top:'10%',
                transition:'all 0s',
                opacity:0
            })
        }
    })
})