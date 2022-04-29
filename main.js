let box = document.querySelector('.box');

window.addEventListener('click', function(e) {

  if (e.target.className == 'nama') {
    box.classList.add('boxUp');
  }else if (e.target.className == 'tutup') {
    box.classList.remove('boxUp');
  }

})
