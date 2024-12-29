const menuButton = document.querySelector(".btn-menu");
      const navLinks = document.querySelector(".nav-links");

      menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    document.addEventListener('contextmenu', (event) => event.preventDefault());
    document.addEventListener('keydown', (event) => {
        if (
            event.key === 'F12' ||
            (event.ctrlKey && event.shiftKey && event.key === 'I') ||
            (event.ctrlKey && event.shiftKey && event.key === 'J') ||
            (event.ctrlKey && event.key === 'U')
        ) {
            event.preventDefault();
            return false;
        }
    });
    (function() {
        const DevToolsChecker = setInterval(() => {
            const element = new Image();
            Object.defineProperty(element, 'id', {
                get: function() {
                    clearInterval(DevToolsChecker);
                    document.body.innerHTML = '<h1>Developer Tools Disabled</h1>';
                }
            });
            console.dir(element);
        }, 1000);
    })();

(function () {
    emailjs.init("A7psiPgZknZ8X8GWa");
  })();
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    document.getElementById("preloader").style.display = "flex";
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };
  
    emailjs
      .send("service_zzj63qm", "template_bwf5g7r", templateParams)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          showModal();
          document.getElementById("contactForm").reset();
          document.getElementById("preloader").style.display = "none";
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send the message. Please try again.");
          document.getElementById("preloader").style.display = "none";
        }
      );
  });
  
  function showModal() {
    const modal = document.getElementById("successModal");
    modal.style.display = "block";
  
    setTimeout(function () {
      closeModal();
    }, 5000);
  }
  
  function closeModal() {
    document.getElementById("successModal").style.display = "none";
  }
  
  window.onclick = function (event) {
    const modal = document.getElementById("successModal");
    if (event.target === modal) {
      closeModal();
    }
  }
  