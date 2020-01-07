// window.scrollEffects = {
//   RevealFX111: {
//     effect: "slide",
//     parameters: {
//       from: "left",
//       distance: "50px",
//       opacity: "0",
//       start: "2"
//     },
//     over: "800ms",
//     defaultDelay: "500ms",
//     easing: "ease-out",
//     viewportFactor: "0",
//     preset: "custom",
//     init: "false",
//     "play-easing": "ease-out"
//   }
// };
// window.contentSwap = {
//   ContentSwap104: {
//     effectType: "",
//     contentType: "overlay",
//     overflowEnabled: "false",
//     effectDelay: "800",
//     effectEasing: "Ease",
//     overlayColor: "490A3D",
//     innerColor: "ffffff",
//     openPage: "same",
//     name: "",
//     captionType: "490A3D",
//     operationType: "edit",
//     hasls: "true",
//     additionalWrapperClasses: "",
//     direction: "bottom",
//     useSameTemplate: "true"
//   },
//   ContentSwap103: {
//     effectType: "",
//     contentType: "overlay",
//     overflowEnabled: "false",
//     effectDelay: "800",
//     effectEasing: "Ease",
//     overlayColor: "490A3D",
//     innerColor: "ffffff",
//     openPage: "same",
//     name: "",
//     captionType: "490A3D",
//     operationType: "edit",
//     hasls: "true",
//     additionalWrapperClasses: "",
//     direction: "bottom",
//     useSameTemplate: "true"
//   },
//   ContentSwap102: {
//     effectType: "",
//     contentType: "overlay",
//     overflowEnabled: "false",
//     effectDelay: "800",
//     effectEasing: "Ease",
//     overlayColor: "490A3D",
//     innerColor: "ffffff",
//     openPage: "same",
//     name: "",
//     captionType: "490A3D",
//     operationType: "edit",
//     hasls: "true",
//     additionalWrapperClasses: "",
//     direction: "bottom",
//     useSameTemplate: "true"
//   }
// };

// jQuery(document).ready(function($) {
//   // scrollEffects
//   jQuery("[reveal-fx]").each(function() {
//     var element = jQuery(this);
//     element.removeAttr("data-scrollreveal-initialized");
//     element.removeAttr("data-scrollreveal-complete");
//     if (!window.scrollEffects.hasOwnProperty(element.attr("reveal-fx"))) {
//       element.show();
//       return;
//     }
//     for (var prop in scrollEffects) {
//       if (element.attr("reveal-fx") == prop) {
//         element.attr("data-scrollReveal", prop);
//         element.hide();
//       }
//     }
//   });
//   if (window.extendScrollReveal) {
//     window.extendScrollReveal.init();
//   }

//   // hoverfx

//   var contentSwapTimeout = setTimeout(function() {
//     if (window.initHoverFX) {
//       initHoverFX(window.contentSwap);
//     }
//   }, 10);
//   jQuery(window).resize(function(e) {
//     clearTimeout(contentSwapTimeout);
//     contentSwapTimeout = setTimeout(function() {
//       if (window.initHoverFX) {
//         initHoverFX(window.contentSwap, null, e);
//       }
//     }, 150);
//   });

//   // background image

//   var isMobile = function() {
//     var viewportWidth = window.innerWidth,
//       maxWidth = 767;

//     var deviceMatch = /iphone|ipod|android|blackberry|mini|windows\sce|windows\sphone|iemobile|palm|webos|series60|symbianos|meego/i.test(
//       navigator.userAgent
//     );
//     var sizeMatch;
//     //var isLTIE9 = (window.flexiCssMenus.browser.name == "msie" && window.flexiCssMenus.browser.version < 9);
//     if (window.matchMedia) {
//       sizeMatch = window.matchMedia("(max-width:" + maxWidth + "px)").matches;
//     } else {
//       sizeMatch = viewportWidth <= maxWidth;
//     }
//     return deviceMatch || sizeMatch;
//   };

//   var isTablet = function() {
//     var viewportWidth = window.innerWidth,
//       minWidth = 768,
//       maxWidth = 1024;
//     var is_touch_device = "ontouchstart" in document.documentElement;

//     var deviceMatch = /ipad|Win64|tablet/i.test(navigator.userAgent);
//     var sizeMatch;
//     //var isLTIE9 = (window.flexiCssMenus.browser.name == "msie" && window.flexiCssMenus.browser.version < 9);
//     if (window.matchMedia) {
//       sizeMatch = window.matchMedia("(max-width:" + maxWidth + "px) and (min-width:" + (minWidth + 1) + "px)").matches;
//     } else {
//       sizeMatch = viewportWidth <= maxWidth && viewportWidth >= minWidth;
//     }
//     return is_touch_device && (deviceMatch || sizeMatch);
//   };

//   if (isMobile() || isTablet()) {
//     function setBackgrounds() {
//       $('[data-bg="transparent"]').each(function(index, el) {
//         var topPosition = (($(this).offset().top + (window.innerHeight - $(this).height()) / 2) / $("body").height()) * 100;
//         var bgHeight = Math.max(window.innerHeight, $(this).outerHeight());

//         $(this).css({
//           "background-image": $("body").css("background-image"),
//           "background-size": "auto " + bgHeight + "px",
//           "background-repeat": "no-repeat",
//           "background-position": "center top " + topPosition + "%"
//         });
//       });
//     }

//     $([window, document]).on("resize", function() {
//       setBackgrounds();
//     });

//     setBackgrounds();
//   }
// });
window.onscroll = function(e) {
  var wrapper = jQuery(".header-wrapper").height(),
    separator = jQuery(".header-separator").height(),
    space = wrapper - separator - 90;

  if (window.pageYOffset > space) {
    jQuery(".header-top.homepage").attr("class", "header-top homepage fixto-fixed");
    jQuery(".text-header-menu a").css("color", "black");
  } else {
    jQuery(".header-top.homepage").attr("class", "header-top homepage");
    jQuery(".text-header-menu a").css("color", "white");
  }
  var section1 = jQuery("#about-1").offset().top;
  if (window.pageYOffset > section1 - 250) {
    jQuery(".titleOne").show();
    jQuery(".textOne").show();
  }

  if (window.pageYOffset > section1 + 50) {
    jQuery(".imgOne").show();
  }

  var content3 = jQuery("#content-3").offset().top;
  if (window.pageYOffset > content3 - 300) {
    jQuery(".imgTwo").show();
    var treeLength = jQuery(".treeOne").children().length;
    var i = 0;
    var intervalTree = setInterval(function() {
      jQuery(jQuery(".treeOne").children()[i]).show();
      i++;
      if (i === treeLength) clearInterval(intervalTree);
    }, 300);
  }

  var content4 = jQuery("#content-4").offset().top;
  if (window.pageYOffset > content4 - 300) {
    jQuery(".imgThree").show();
    var lenTwo = jQuery(".treeTwo").children().length;
    var j = 0;
    var intervalTwo = setInterval(function() {
      jQuery(jQuery(".treeTwo").children()[j]).show();
      j++;
      if (j === lenTwo) clearInterval(intervalTwo);
    }, 200);
  }

  var features2 = jQuery("#features-2").offset().top;
  if (window.pageYOffset > features2 - 300) {
    jQuery(".treeThree")
      .children()
      .show();
  }
  var about3 = jQuery("#about-3").offset().top;
  if (window.pageYOffset > about3 - 300) {
    jQuery(".imgFour").show();
    var lenThree = jQuery(".treeFour").children().length;
    var k = 0;
    var intervalThree = setInterval(function() {
      jQuery(jQuery(".treeFour").children()[k]).show();
      k++;
      if (k === lenThree) clearInterval(intervalThree);
    }, 200);
  }
};

// Galery
var itemsRooms = [
  {
    src: "/galery/i/photos/DSC04722.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04726.JPG",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/DSC04367.JPG",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/DSC04369.JPG",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/DSC04370.JPG",
    w: 1024,
    h: 683
  }
];
var itemsKitchen = [
  {
    src: "/galery/i/photos/DSC04732.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04734.JPG",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/DSC04738.JPG",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/DSC04495.JPG",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/DSC04499.JPG",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/DSC04501.JPG",
    w: 1024,
    h: 683
  }
];
var itemsGalery = [
  {
    src: "/galery/i/photos/DSC04722.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04726.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04732.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04734.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04738.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04303.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04304.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04306.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04319.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04321.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04322.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04323.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04326.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04327.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04334.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04339.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04343.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04344.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04347.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04348.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04350.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04353.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04367.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04369.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04370.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04373.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04376.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04377.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04387.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04392.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04399.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04402.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04404.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04429.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04431.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04464.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04467.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04479.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04486.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04495.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04499.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04501.JPG",
    w: 964,
    h: 1024
  },
  {
    src: "/galery/i/photos/DSC04502.JPG",
    w: 964,
    h: 1024
  }
];
var openPhotoSwipe = function(items) {
  var pswpElement = document.querySelectorAll(".pswp")[0];

  var options = {
    history: false,
    focus: false,

    showAnimationDuration: 0,
    hideAnimationDuration: 0,
    index: 0
  };

  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

document.getElementById("btnRooms").onclick = openPhotoSwipe.bind(this, itemsRooms);
document.getElementById("btnKitchen").onclick = openPhotoSwipe.bind(this, itemsKitchen);
document.getElementById("btnGalery").onclick = openPhotoSwipe.bind(this, itemsGalery);
