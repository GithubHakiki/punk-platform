const rawTestimonials = [
  {
    quote:
      "Told them I needed a full ML model with deployment in 3 days. They laughed. Then did it in 1. I think they sold their soul.",
    name: "Overachiever Turned Believer",
    location: "Sleman",
  },
  {
    quote:
      "Dropped out mentally mid-semester. Sent them the syllabus, got back a full analytics report. My prof questioned their own methods.",
    name: "Analytics Anxious",
    location: "Jakarta",
  },
  {
    quote:
      "Needed cloud help. They scaled it like a SaaS startup on Red Bull. Not sure if this is even legal.",
    name: "Sky High Hustler",
    location: "Bandung",
  },
  {
    quote:
      "Wanted a full-stack app in a week. They delivered overnight with CI/CD and dark mode. The code glows. Might be alive.",
    name: "Framework Fumbler",
    location: "Surabaya",
  },
  {
    quote:
      "ML almost killed me. Blinked, boom — working model, clean data, live dashboard. Witchcraft confirmed.",
    name: "ML Meltdown Survivor",
    location: "Denpasar",
  },
  {
    quote:
      "Prof asked for real-world cloud infra. They deployed autoscaling GCP like it’s a game. Even the TA begged for the diagram.",
    name: "Cloud Camp Casualty",
    location: "Yogyakarta",
  },
  {
    quote:
      "Sent them trash JSON and a weak prompt. Got back an ML model that detects sarcasm. It might be alive. I named it Kevin.",
    name: "Prompt Goblin",
    location: "Semarang",
  },
  {
    quote:
      "Capstone panic? They built analytics that predicts user churn like a psychic. My lecturer thinks I joined a startup.",
    name: "Data Deceiver",
    location: "Malang",
  },
  {
    quote:
      "Asked for a dashboard. Got a full analytics suite with real-time updates. Now my lecturer wants to publish it.",
    name: "Just Here for 60",
    location: "Medan",
  },
  {
    quote:
      "Begged for backend help. Got a full REST API with docs and rate limits. Prof offered me an internship.",
    name: "Backend Beggar",
    location: "Padang",
  },
  {
    quote:
      "Was failing ML. They made a model, slides, voiceover — and taught me the math. I got an A and emotional damage.",
    name: "Academic Impostor",
    location: "Makassar",
  },
];

const testimonials = rawTestimonials.map((item) => ({
  ...item,
  avatar: item.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase(),
}));

let currentIndex = 0;
function updateTestimonial(t) {
  let e = document.getElementById("testimonial-quote"),
    o = document.getElementById("testimonial-name"),
    n = document.getElementById("testimonial-location"),
    l = document.querySelector(".author-avatar span");
  (e.textContent = `"${testimonials[t].quote}"`),
    (o.textContent = testimonials[t].name),
    (n.textContent = testimonials[t].location),
    (l.textContent = testimonials[t].avatar);
}
function showPrevTestimonial() {
  updateTestimonial(
    (currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length)
  );
}
function showNextTestimonial() {
  updateTestimonial((currentIndex = (currentIndex + 1) % testimonials.length));
}
updateTestimonial(currentIndex);
let autoScrollInterval;
const testimonialContainer = document.querySelector(".testimonial-container");
function startAutoScroll() {
  stopAutoScroll(),
    (autoScrollInterval = setInterval(() => {
      showNextTestimonial();
    }, 3e3));
}
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}
function openModal(t) {
  (document.getElementById(t).style.display = "block"),
    (document.body.style.overflow = "hidden");
}
function closeModal(t) {
  (document.getElementById(t).style.display = "none"),
    (document.body.style.overflow = "auto");
}
testimonialContainer.addEventListener("mouseenter", stopAutoScroll),
  testimonialContainer.addEventListener("mouseleave", startAutoScroll),
  startAutoScroll(),
  (window.onclick = function (t) {
    let e = document.querySelectorAll(".modal");
    e.forEach((e) => {
      t.target === e &&
        ((e.style.display = "none"), (document.body.style.overflow = "auto"));
    });
  }),
  document.addEventListener("keydown", function (t) {
    if ("Escape" === t.key) {
      let e = document.querySelectorAll(".modal");
      e.forEach((t) => {
        "block" === t.style.display &&
          ((t.style.display = "none"), (document.body.style.overflow = "auto"));
      });
    }
  });
