var headerName = "Satron Engineering";
document.title = headerName;

/** Change Title dynamically when click the nav bar */
function navTitle(title) {
  document.title = title.concat(headerName);
}

document.addEventListener("DOMContentLoaded", () => {
  const parallaxEffect = document.querySelectorAll(".parallax");
  M.Parallax.init(parallaxEffect, {});
});

function mapLocation() {
  var URL =
    "https://www.google.co.in/maps/place/Palayur,+P+N+Palayam,+Tamil+Nadu+641044/@11.0170942,76.9765038,15z/data=!3m1!4b1!4m5!3m4!1s0x3ba8584bd4364f8d:0x37275d90116754c8!8m2!3d11.0170946!4d76.9852586";
  window.open(URL, "_blank");
}
