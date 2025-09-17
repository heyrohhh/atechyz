document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navOp = document.getElementById("navop");

  hamburger.addEventListener("click", () => {
    navOp.classList.toggle("fullscreen");
    // Change hamburger to close icon
    if (navOp.classList.contains("fullscreen")) {
      hamburger.textContent = "✕";
    } else {
      hamburger.textContent = "☰";
    }
  });

  // Optional: Close menu when clicking on any link
  const links = navOp.querySelectorAll("li");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navOp.classList.remove("fullscreen");
      hamburger.textContent = "☰";
    });
  });
});


// cursoul wala section

 function scrollTestimonials(direction) {
    const container = document.getElementById('testimonialContainer');
    const scrollAmount = 320; // card width + gap
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  //contact page
  const popup = document.getElementById('popupMsg');

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch('https://atechyz-it-and-support-services.onrender.com/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.ok) {
      e.target.reset();
      showPopup(result.message || 'Message sent successfully!', 'success');
    } else {
      showPopup(result.message || 'Failed to send message.', 'error');
    }
  } catch (err) {
    console.error(err);
    showPopup('Failed to send message.', 'error');
  }
});

function showPopup(message, type) {
  popup.textContent = message;
  popup.className = type;
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
}

