'use strict';

var photoArray = ['img/image1.jpg','img/image2.jpg','img/image3.jpg'],
  photoIndex = 0;
imgDuration = 5000;

function slideShow() {
  document.getElementById('image1').src = photoArray[photoIndex];
  photoIndex++;
  if (photoIndex == imgArray.length) { photoIndex = 0; }
  setTimeout('slideShow()', photoDuration);
}
slideShow();