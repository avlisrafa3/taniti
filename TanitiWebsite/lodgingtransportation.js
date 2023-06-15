const toggleImages = document.getElementById('toggle-images');
const imageContainer = document.querySelector('.image-container');

toggleImages.addEventListener('change', function() {
  if (toggleImages.checked) {
    imageContainer.style.display = 'block';
  } else {
    imageContainer.style.display = 'none';
  }
});
