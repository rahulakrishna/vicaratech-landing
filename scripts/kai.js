$(document).ready(function () {
  console.log('Kai working and all.')


  $('.news-papers').slick({
    centerMode:true,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false,
    fade:true,
    asNavFor:'.news-papers-nav',
    autoplay:true
  });
  $('.news-papers-nav').slick({
    slidesToShow:3,
    slidesToScroll:1,
    asNavFor:'.news-papers',
    centerMode:true,
    centerPadding:'60px',
    focusOnSelect:true
  })

  $('.people-row').slick({
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false
  })
  $('.people-nav').slick({
    slidesToShow:6,
    slidesToScroll:1,
    arrows:true,
    focusOnSelect:true,
    asNavFor:'.people-row'
  })

  $('#vignesh').click(function(){
    $('.people-row').slick("slickGoTo",4)
    $('.people-nav').slick("slickGoTo",4)
  })

	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['landing', 'meet-kai','smart-connect','adaptive-body','media','team','contact'],
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});

    firstAnim=function(){
      $('.secondPage .text').css({
        marginLeft:'100px',
        transition:'all 1s'
      })
      $('.secondPage .meet-kai').css({
        position:'absolute',
        marginRight:'100px',
        transition:'all 1s'
      })
      $('.secondPage .content .kai').css({
        opacity:1
      })

    }
    firstAnimReverse=function(){
      $('.secondPage .text').css({
        marginLeft:'-500px',
        transition:'all 1s'
      })
      $('.secondPage .meet-kai').css({
        position:'absolute',
        marginRight:'-300px',
        transition:'all 1s'
      })
      $('.secondPage .content .kai').css({
        opacity:0,
        transition:'all 0.2s'
      })
    }
    secondAnim=function(){
      firstAnimReverse()
      $('.thirdPage .text').css({
        left:'1%',
        transition:'all 1s'
      })
      $('.thirdPage .smart-connect').css({
        position:'absolute',
        right:'50px',
        transition:'all 1s'
      })
      $('.thirdPage .hand').css({
        opacity:1,
        transition:'all 1s'
      })
    }
    secondAnimRev=function(back){
      $('.thirdPage .text').css({
        left:'-50%',
        transition:'all 1s'
      })
      $('.thirdPage .smart-connect').css({
        position:'absolute',
        right:'-100%',
        transition:'all 1s'
      })
      $('.thirdPage .hand').css({
        opacity:0,
        transition:'all 0.5s'
      })
    }

    thirdAnim=function(){
      secondAnimRev();
      $('.fourthPage .text').css({
        left:'1%',
        transition:'all 1s'
      })
      $('.fourthPage .smart-connect').css({
        position:'absolute',
        right:'1%',
        transition:'all 1s'
      })
    }
    thirdAnimRev=function(){
      $('.fourthPage .text').css({
        left:'-50%',
        transition:'all 1s'
      })
      $('.fourthPage .smart-connect').css({
        position:'absolute',
        right:'-100%',
        transition:'all 1s'
      })
    }

    hideFirstPage=function(){
      $('.firstPage').css({
        opacity:0,
        transition:'all 1s'
      })
    }
    showFirstPage=function(){
      $('.firstPage').css({
        opacity:1,
        transition:'all 1s'
      })
    }

    wht=$(window).height();
    $(window).scroll(function () {
        console.log($(window).scrollTop(),wht);
        if($(window).scrollTop()>(wht-200)){
          firstAnim();
          hideFirstPage();
        }
        else{
          firstAnimReverse();
          showFirstPage();
        }
        if($(window).scrollTop()>(wht*2-200)){
          secondAnim();
        }
        else{
          secondAnimRev();
        }
        if($(window).scrollTop()>(wht*3-200)){
          thirdAnim();
        }
        else{
          thirdAnimRev();
        }
    })
