// script.js

document.addEventListener('DOMContentLoaded', () => {
  const booksToggle = document.getElementById('books-toggle');
  const booksSubmenu = document.getElementById('books-submenu');

  if (!booksToggle || !booksSubmenu) {
    console.error('Books menu elements not found');
    return;
  }

  booksToggle.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Books toggle clicked');
    
    // Toggle visibility
    if (booksSubmenu.style.display === 'block') {
      booksSubmenu.style.display = 'none';
    } else {
      booksSubmenu.style.display = 'block';
    }
  });

  // Hide the submenu when clicking outside
  document.addEventListener('click', (event) => {
    if (!booksToggle.contains(event.target) && !booksSubmenu.contains(event.target)) {
      booksSubmenu.style.display = 'none';
    }
  });
});

/*for reviews*/
// Function to filter reviews based on category
function filterReviews(category) {
  const reviews = document.querySelectorAll('.review-placeholder');

  reviews.forEach(review => {
      const reviewCategory = review.getAttribute('data-category');

      if (category === 'all' || reviewCategory === category) {
          review.classList.remove('hidden');
      } else {
          review.classList.add('hidden');
      }
  });
}

// Initialize the script by showing all reviews by default
document.addEventListener('DOMContentLoaded', () => {
  filterReviews('all');
});


/*hamburger-nav*/
function toggleMenu(){
  const menu= document.querySelector(".menu-links");
  const icon= document.querySelector(".hamburger-icon ");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

}

