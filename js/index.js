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
  var URL =
    "https://www.google.co.in/maps/place/Palayur,+P+N+Palayam,+Tamil+Nadu+641044/@11.0170942,76.9765038,15z/data=!3m1!4b1!4m5!3m4!1s0x3ba8584bd4364f8d:0x37275d90116754c8!8m2!3d11.0170946!4d76.9852586";
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
