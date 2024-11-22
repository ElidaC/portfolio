const saturationRange = document.getElementById('saturation-range');

    saturationRange.addEventListener('input', (event) => {
      const saturationValue = event.target.value; 
      document.body.style.filter = `saturate(${saturationValue})`; 
    });



    
const photos = [
    'gallery/ba.jpg',
    'gallery/er.jpg',
    'gallery/erba.png',
    'gallery/erer.jpg',
    'gallery/erliu.png',
    'gallery/erqi.jpg',
    'gallery/ersan.jpg',
    'gallery/ershi.jpg',
    'gallery/ersi.JPG',
    'gallery/erwu.jpg',
    'gallery/eryi.png',
    'gallery/jiu.JPG',
    'gallery/liu.JPG',
    'gallery/qi.JPG',
    'gallery/san.JPG',
    'gallery/shi.JPG',
    'gallery/shiba.jpg',
    'gallery/shier.jpg',
    'gallery/shijiu.jpg',
    'gallery/shiliu.JPG',
    'gallery/shiqi.jpg',
    'gallery/shisan.JPG',
    'gallery/shisi.jpg',
    'gallery/shiwu.jpg',
    'gallery/shisan.JPG',
    'gallery/shiyi.jpg',
    'gallery/si.png',
    'gallery/wu.JPG',
    'gallery/yi.png'
  ];
  
  const photoDiv = document.querySelector('.photo');
  
  function setRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    const randomPhoto = photos[randomIndex];
    photoDiv.style.backgroundImage = `url(${randomPhoto})`;
  }
  
  setRandomPhoto();
  
  setInterval(setRandomPhoto, 1000);
  





