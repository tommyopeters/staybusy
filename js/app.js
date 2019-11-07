$(document).ready(function() {
  let preload = [
    "https://res.cloudinary.com/tommyopeters/image/upload/v1572901601/staybusy/Group_568_2_fwxzas.png",
    "https://res.cloudinary.com/tommyopeters/image/upload/v1572894341/staybusy/Group_513_o4qbnq.png",
    "https://res.cloudinary.com/tommyopeters/image/upload/v1572901641/staybusy/Group_567_1_kiriio.png"
  ];
  let increment = 0;
  let images = [];
  for (i = 0; i < preload.length; i++) {
    images[i] = new Image();
    images[i].src = preload[i];
  }

  let carouselImages = $(".carousel div img");
  let carouselButtonLeft = $(".fa-arrow-left");
  let carouselButtonRight = $(".fa-arrow-right");
  carouselButtonLeft.click(e => {
    slideLeft();
  });
  carouselButtonRight.click(e => {
    slideRight();
  });

  slideLeft = () => {
    increment = ++increment % 3;
    carouselImages.each(function(index) {
      $(this).fadeOut(200);
      setTimeout(() => {
        $(this).attr("src", preload[(increment + index) % 3]);
        $(this).show("slide", { direction: "right" }, 200);
      }, 200);
    });
  };
  slideRight = () => {
    increment = --increment % 3 < 0 ? 3 + increment : increment;
    carouselImages.each(function(index) {
      $(this).fadeOut(200);
      setTimeout(() => {
        $(this).attr("src", preload[(increment + index) % 3]);
        $(this).show("slide", { direction: "left" }, 200);
      }, 200);
    });
  };
});
