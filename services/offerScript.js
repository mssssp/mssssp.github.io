// Sticky Navbar
window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Expandable Service Details
document.addEventListener('DOMContentLoaded', function() {
    var expandButtons = document.querySelectorAll('.expand-button');
    expandButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var details = this.nextElementSibling;
            if (details) {
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
                this.textContent = this.textContent === 'More Details' ? 'Less Details' : 'More Details';
            }
        });
    });


    // Hamburger Menu
    var hamburger = document.querySelector('.hamburger-menu');
    var navLinks = document.querySelector('.nav-links');
    var navLinksItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    navLinksItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Portal Modal
    var portalLink = document.getElementById('customerPortal');
    var portalModal = document.getElementById('portalModal');
    var portalClose = portalModal.querySelector('.close');

    portalLink.addEventListener('click', function(e) {
        e.preventDefault();
        portalModal.style.display = "block";
    });

    portalClose.addEventListener('click', function() {
        portalModal.style.display = "none";
    });

    // Add Event Listener to all elements with class 'close'
    var closeButtons = document.getElementsByClassName("close");
    Array.from(closeButtons).forEach(function(button) {
        button.addEventListener('click', function() {
            var modal = this.closest(".modal");
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

	var contactBtn = document.querySelector('.contact-btn'); // or '#contact-btn' for an ID
	if (contactBtn) {
		contactBtn.addEventListener('click', function() {
			// Your code here
		});
	}
    
});

// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
      closeAllDropdowns(); // Close all open dropdowns before opening the current one
      dropdown.querySelector('.dropdown-content').style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
  });

  function closeAllDropdowns() {
    dropdowns.forEach(dropdown => {
      dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
  }
});

