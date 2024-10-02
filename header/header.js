document.addEventListener('DOMContentLoaded', (event) => {
  // fetch('../header/header.html')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('not get response');
  //     }
  //     return response.text();
  //   })
  //   .then(data => {

  //     document.getElementById('nav-section').innerHTML = data;


  const activePage = window.location.pathname;


  const navlinks = document.querySelectorAll('nav a');


  navlinks.forEach(link => {

    if (link.href.includes(activePage)) {
      link.classList.add('active');
    }
  });
})
            // .catch(error => {
            //   console.error('Response not found, find any error:', error);
            // });
      


