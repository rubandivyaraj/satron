const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 700,
  transition: 500,
  interval: 6000,
});

function mapLocation() {
  var URL = "https://goo.gl/maps/g4sKajVSN62RZieL6";
  window.open(URL, "_blank");
}

var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          if (count < target) {
            counter.innerText = count + 1;
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    }
  },
  { threshold: [0] }
);

observer.observe(document.querySelector("#counters"));
