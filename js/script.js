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