const data = [
  {
    imageUrl: "https://example.com/image1.jpg",
    title: "Web Development",
    description: "BMDU is the country's best Web development company in Noida..."
  },
  {
    imageUrl: "https://example.com/image2.jpg",
    title: "Digital Marketing",
    description: "We excel in digital marketing strategies that drive results..."
  },
];

function Services() {
  const service_Container = document.getElementById('services-content');

  // Check if the element exists before trying to set its content
  if (service_Container) {
    service_Container.innerHTML = ''; // Clear existing content

    data.forEach((link) => {
      const serviceblock = `
          <div class="col-md-4 text-center">
            <div class="content-wrapper">
              <figure>
                <img src="${link.imageUrl}" alt="${link.title}" class="img-fluid" />
              </figure>
              <h3>${link.title}</h3>
              <p>${link.description}</p>
            </div>
          </div>
        `;
      service_Container.innerHTML += serviceblock;
    });
  } else {
    console.error('Element with ID "services-content" not found.');
  }
}

Services();





document.addEventListener('DOMContentLoaded', (event) => {
  const activePage = window.location.pathname; 
  const navlinks = document.querySelectorAll('nav a'); 

  navlinks.forEach(link => {
    
      if (link.href === window.location.origin + activePage) {
          link.classList.add('active'); 
      } else {
          link.classList.remove('active'); 
      }
  });
});


