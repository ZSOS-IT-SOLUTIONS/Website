/* ===============================
   ZSOS IT SOLUTIONS - SCRIPT PART 1
   Navbar, Smooth Scroll, Back-to-Top, Preloader
   =============================== */

// Wait for DOM load
document.addEventListener("DOMContentLoaded", function () {
  console.log("ZSOS IT Solutions - JS Loaded 🚀");

  /* ===============================
     Preloader
     =============================== */
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 600);
    });
  }

  /* ===============================
     Smooth Scroll for Anchor Links
     =============================== */
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  /* ===============================
     Navbar Shrink on Scroll
     =============================== */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  }

  /* ===============================
     Back to Top Button
     =============================== */
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ===============================
     Mobile Menu Toggle
     =============================== */
  const mobileMenu = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".navbar-collapse");

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  console.log("Part 1 loaded ✅");
});
/* ===============================
   ZSOS IT SOLUTIONS - SCRIPT PART 2
   Scroll Animations, Counters, Skills Progress Bars, Typed Text
   =============================== */

document.addEventListener("DOMContentLoaded", function () {
  console.log("Part 2 loaded ✅");

  /* ===============================
     Reveal Elements on Scroll
     =============================== */
  const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  const quizzes = {
  python: {
    title: "Python Quiz",
    questions: [
      { q: "Who developed Python?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: 0 },
      { q: "What is the file extension for Python?", options: [".java", ".c", ".cpp", ".py"], answer: 3 },
      { q: "Which keyword is used for function in Python?", options: ["func", "define", "def", "function"], answer: 2 },
      { q: "Which collection is ordered & changeable?", options: ["Set", "Tuple", "List", "Dictionary"], answer: 2 },
      { q: "Which library is used for ML?", options: ["NumPy", "TensorFlow", "Matplotlib", "All"], answer: 3 },
      { q: "What is PIP in Python?", options: ["Package Manager", "Compiler", "Debugger", "Interpreter"], answer: 0 },
      { q: "Python is ____ typed?", options: ["Strongly", "Dynamically", "Statically", "Loosely"], answer: 1 },
      { q: "Which keyword is used for inheritance?", options: ["extends", "inherits", "super", "class"], answer: 3 },
      { q: "What does len() do?", options: ["Length", "Loop", "Index", "Count"], answer: 0 },
      { q: "Is Python case-sensitive?", options: ["Yes", "No"], answer: 0 }
    ]
  },
  java: {
    title: "Java Quiz",
    questions: [
      { q: "Who developed Java?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Ken Thompson"], answer: 1 },
      { q: "Extension of Java files?", options: [".class", ".java", ".js", ".jar"], answer: 1 },
      { q: "Which keyword is used for inheritance?", options: ["extends", "inherits", "super", "class"], answer: 0 },
      { q: "Which JVM stands for?", options: ["Java Virtual Machine", "Java Verified Machine"], answer: 0 },
      { q: "Java supports?", options: ["OOP", "Procedural", "Both"], answer: 2 },
      { q: "Which collection allows duplicates?", options: ["Set", "List", "Map"], answer: 1 },
      { q: "Java is ____ typed?", options: ["Dynamically", "Statically"], answer: 1 },
      { q: "Which is not a Java keyword?", options: ["static", "goto", "var", "class"], answer: 2 },
      { q: "Which package is default?", options: ["java.util", "java.lang", "java.io"], answer: 1 },
      { q: "Is Java platform independent?", options: ["Yes", "No"], answer: 0 }
    ]
  },
  c: {
    title: "C Quiz",
    questions: [
      { q: "Who developed C?", options: ["Dennis Ritchie", "Ken Thompson", "Bjarne Stroustrup", "Guido van Rossum"], answer: 0 },
      { q: "Which symbol ends a statement?", options: [";", ":", ".", ","], answer: 0 },
      { q: "C is a ____ language?", options: ["High-level", "Low-level", "Both"], answer: 2 },
      { q: "Which loop is guaranteed to run once?", options: ["for", "while", "do-while"], answer: 2 },
      { q: "Which header is needed for printf?", options: ["<conio.h>", "<stdio.h>", "<stdlib.h>"], answer: 1 },
      { q: "Which operator is used for address?", options: ["&", "*", "%"], answer: 0 },
      { q: "Which storage class is default?", options: ["auto", "static", "extern"], answer: 0 },
      { q: "Size of int (32-bit)?", options: ["2", "4", "8"], answer: 1 },
      { q: "Which keyword is used for constants?", options: ["const", "final", "static"], answer: 0 },
      { q: "Is C case-sensitive?", options: ["Yes", "No"], answer: 0 }
    ]
  },
  cpp: {
    title: "C++ Quiz",
    questions: [
      { q: "Who developed C++?", options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling"], answer: 0 },
      { q: "Which keyword is used for OOP inheritance?", options: ["extends", "inherits", ":", "class"], answer: 2 },
      { q: "C++ supports?", options: ["OOP", "Procedural", "Both"], answer: 2 },
      { q: "Which operator is overloaded for I/O?", options: ["<< and >>", "+", "="], answer: 0 },
      { q: "Which is base class of all classes?", options: ["object", "Object", "None"], answer: 2 },
      { q: "C++ is ____ typed?", options: ["Static", "Dynamic"], answer: 0 },
      { q: "Which function always executes first?", options: ["start()", "main()", "init()"], answer: 1 },
      { q: "Which keyword is used for abstraction?", options: ["abstract", "virtual", "interface"], answer: 1 },
      { q: "Which library is used for input/output?", options: ["<iostream>", "<stdio.h>"], answer: 0 },
      { q: "Is C++ case-sensitive?", options: ["Yes", "No"], answer: 0 }
    ]
  }
};

let currentQuiz = null, currentIndex = 0, score = 0;

function startQuiz(language) {
  currentQuiz = quizzes[language];
  currentIndex = 0;
  score = 0;

  document.getElementById("quizTitle").innerText = currentQuiz.title;
  document.getElementById("quizContainer").classList.remove("d-none");
  document.getElementById("resultBox").classList.add("d-none");

  loadQuestion();
}

function loadQuestion() {
  const question = currentQuiz.questions[currentIndex];
  document.getElementById("questionBox").innerHTML = `<h5>${currentIndex+1}. ${question.q}</h5>`;
  document.getElementById("optionsBox").innerHTML = "";

  question.options.forEach((opt, i) => {
    document.getElementById("optionsBox").innerHTML += `
      <label class="quiz-option">
        <input type="radio" name="quizOption" value="${i}"> ${opt}
      </label>
    `;
  });
}

function nextQuestion() {
  const selected = document.querySelector("input[name='quizOption']:checked");
  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (parseInt(selected.value) === currentQuiz.questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;
  if (currentIndex < currentQuiz.questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quizContainer").classList.add("d-none");
  document.getElementById("resultBox").classList.remove("d-none");

  let result = `You scored ${score}/10 - `;
  result += score >= 6 ? "<span class='text-success'>Pass ✅</span>" : "<span class='text-danger'>Fail ❌</span>";

  document.getElementById("resultText").innerHTML = result;
}


  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on load

  /* ===============================
     Counter Animation
     =============================== */
  const counters = document.querySelectorAll(".counter");

  function runCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 200;

    function updateCounter() {
      count += increment;
      if (count < target) {
        counter.textContent = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    }
    updateCounter();
  }

  let counterStarted = false;
  function startCountersOnScroll() {
    const counterSection = document.querySelector("#stats");
    if (!counterSection) return;

    const sectionTop = counterSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight && !counterStarted) {
      counters.forEach(counter => runCounter(counter));
      counterStarted = true;
    }
  }

  window.addEventListener("scroll", startCountersOnScroll);

  /* ===============================
     Skills Progress Bars
     =============================== */
  const skillBars = document.querySelectorAll(".skill-progress");

  function animateSkills() {
    skillBars.forEach(bar => {
      const value = bar.getAttribute("data-progress");
      bar.style.width = value + "%";
    });
  }

  let skillsStarted = false;
  function startSkillsOnScroll() {
    const skillsSection = document.querySelector("#skills");
    if (!skillsSection) return;

    const sectionTop = skillsSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight && !skillsStarted) {
      animateSkills();
      skillsStarted = true;
    }
  }

  window.addEventListener("scroll", startSkillsOnScroll);

  /* ===============================
     Typed Text Effect
     =============================== */
  const typedTextElement = document.querySelector(".typed-text");
  if (typedTextElement) {
    const words = typedTextElement.getAttribute("data-words").split(",");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typedTextElement.textContent = currentWord.substring(0, charIndex--);
      } else {
        typedTextElement.textContent = currentWord.substring(0, charIndex++);
      }

      let typeSpeed = isDeleting ? 80 : 120;
      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
  }

  /* ===============================
     Scroll Progress Indicator
     =============================== */
  const scrollProgress = document.querySelector(".scroll-progress-bar");
  if (scrollProgress) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + "%";
    });
  }
});
/* ===============================
   ZSOS IT SOLUTIONS - SCRIPT PART 3
   Carousels, Modals, Portfolio Filtering, Testimonials
   =============================== */

document.addEventListener("DOMContentLoaded", function () {
  console.log("Part 3 loaded ✅");

  /* ===============================
     Simple Carousel / Slider
     =============================== */
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    if (slides.length > 0) {
      showSlide(currentIndex);
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000); // autoplay
  });

  /* ===============================
     Modal Popups
     =============================== */
  const modalTriggers = document.querySelectorAll("[data-modal-target]");
  const modals = document.querySelectorAll(".modal");
  const modalCloseBtns = document.querySelectorAll(".modal-close");

  modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal-target");
      const modal = document.querySelector(modalId);
      if (modal) modal.classList.add("active");
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").classList.remove("active");
    });
  });

  window.addEventListener("click", e => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });

  /* ===============================
     Portfolio Filtering
     =============================== */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");

      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      portfolioItems.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
          item.classList.add("fade-in");
        } else {
          item.style.display = "none";
          item.classList.remove("fade-in");
        }
      });
    });
  });

  /* ===============================
     Testimonials Slider
     =============================== */
  const testimonialWrapper = document.querySelector(".testimonials-wrapper");
  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const testimonialPrev = document.querySelector(".testimonial-prev");
  const testimonialNext = document.querySelector(".testimonial-next");
  let testimonialIndex = 0;

  function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
    showTestimonial(testimonialIndex);
  }

  function prevTestimonial() {
    testimonialIndex = (testimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
    showTestimonial(testimonialIndex);
  }

  if (testimonialSlides.length > 0) {
    showTestimonial(testimonialIndex);
  }

  if (testimonialNext) testimonialNext.addEventListener("click", nextTestimonial);
  if (testimonialPrev) testimonialPrev.addEventListener("click", prevTestimonial);

  setInterval(nextTestimonial, 6000); // autoplay testimonials
});
/* ===============================
   ZSOS IT SOLUTIONS - SCRIPT PART 4
   Forms Validation, FAQ Accordion, Dark Mode Toggle, Back to Top
   =============================== */

document.addEventListener("DOMContentLoaded", function () {
  console.log("Part 4 loaded ✅");

  /* ===============================
     Contact Form Validation
     =============================== */
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      const nameInput = contactForm.querySelector("input[name='name']");
      const emailInput = contactForm.querySelector("input[name='email']");
      const messageInput = contactForm.querySelector("textarea[name='message']");

      if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add("is-invalid");
      } else {
        nameInput.classList.remove("is-invalid");
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailInput.value.match(emailPattern)) {
        isValid = false;
        emailInput.classList.add("is-invalid");
      } else {
        emailInput.classList.remove("is-invalid");
      }

      if (!messageInput.value.trim()) {
        isValid = false;
        messageInput.classList.add("is-invalid");
      } else {
        messageInput.classList.remove("is-invalid");
      }

      if (isValid) {
        alert("✅ Message Sent Successfully!");
        contactForm.reset();
      } else {
        alert("⚠️ Please fill in all required fields correctly.");
      }
    });
  }

  /* ===============================
     Newsletter Signup Validation
     =============================== */
  const newsletterForm = document.querySelector("#newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[name='newsletter-email']");
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!emailInput.value.match(emailPattern)) {
        alert("⚠️ Please enter a valid email.");
      } else {
        alert("🎉 Thanks for subscribing!");
        newsletterForm.reset();
      }
    });
  }

  /* ===============================
     FAQ Accordion
     =============================== */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* ===============================
     Dark Mode Toggle
     =============================== */
  const darkModeToggle = document.querySelector("#dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  }

  /* ===============================
     Back to Top Button
     =============================== */
  const backToTopBtn = document.querySelector("#back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
