$(document).ready(function () {
    console.log('Kai working and all.')
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if($(window).scrollTop()>50){
          $('.secondPage').css({
            position:'fixed',
            top:'0px',
            transition:'all 0.5s'
          })
          $('.secondPage .text').css({
            left:'1%',
            transition:'all 1s'
          })
          $('.secondPage .meet-kai').css({
            position:'absolute',
            right:'1%',
            transition:'all 1s'
          })
        }
        else{
          $('.secondPage').css({
            position:'absolute',
            top:'100%',
            transition:'all 0.5s'
          })
          $('.secondPage .text').css({
            left:'-145%',
            transition:'all 1s'
          })
          $('.secondPage .meet-kai').css({
            position:'absolute',
            right:'-50%',
            transition:'all 1s'
          })
        }
    })
})
