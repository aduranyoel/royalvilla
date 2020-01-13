window.onscroll = function() {
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
    jQuery(".titleOne").css('opacity', 1).addClass('bounceInLeft');
    jQuery(".textOne").css('opacity', 1).addClass('bounceInRight');
  }


  var content3 = jQuery("#content-3").offset().top;
  if (window.pageYOffset > content3 - 300) {
    var treeLength = jQuery(".treeOne").children().length;
    var i = 0;
    var intervalTree = setInterval(function() {
      jQuery(jQuery(".treeOne").children()[i]).css('opacity', 1).addClass('bounceInRight');
      i++;
      if (i === treeLength) clearInterval(intervalTree);
    }, 300);
  }

  var content4 = jQuery("#content-4").offset().top;
  if (window.pageYOffset > content4 - 300) {
    var lenTwo = jQuery(".treeTwo").children().length;
    var j = 0;
    var intervalTwo = setInterval(function() {
      jQuery(jQuery(".treeTwo").children()[j]).css('opacity', 1).addClass('bounceInLeft');
      j++;
      if (j === lenTwo) clearInterval(intervalTwo);
    }, 200);
  }

  var features2 = jQuery("#features-2").offset().top;
  if (window.pageYOffset > features2 - 300) {
    var lenThree = jQuery(".treeThree").children().length;
    var c = 0;
    var intervalExt = setInterval(function() {
      jQuery(jQuery(".treeThree").children()[c]).css('opacity', 1).addClass('flipInY');
      c++;
      if (c === lenTwo) clearInterval(intervalExt);
    }, 200);
    
  }
  var about3 = jQuery("#about-3").offset().top;
  if (window.pageYOffset > about3 - 300) {
    var lenThree = jQuery(".treeFour").children().length;
    var k = 0;
    var intervalThree = setInterval(function() {
      jQuery(jQuery(".treeFour").children()[k]).css('opacity', 1).addClass('bounceInLeft');
      k++;
      if (k === lenThree) clearInterval(intervalThree);
    }, 200);
  }
  
  var content5 = jQuery("#content-5").offset().top;
  if (window.pageYOffset > content5 - 300) {
    var lenEnd = jQuery(".treeEnd").children().length;
    var q = 0;
    var intervalThree = setInterval(function() {
      jQuery(jQuery(".treeEnd").children()[q]).css('opacity', 1).addClass('bounceInRight');
      q++;
      if (q === lenEnd) clearInterval(intervalThree);
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
    src: "/galery/i/photos/bano1.jpeg",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/bano2.jpeg",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/bano3.jpeg",
    w: 1024,
    h: 683
  },
  {
    src: "/galery/i/photos/bano4.jpeg",
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
