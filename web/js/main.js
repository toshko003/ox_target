import { createOptions } from "./createOptions.js";

const optionsWrapper = document.getElementById("options-wrapper");
const body = document.body;
const eyeElement = document.getElementById("eye");
const eye = document.getElementById("eyeSvg");

window.addEventListener("message", (event) => {
  optionsWrapper.innerHTML = "";

  switch (event.data.event) {
    case "visible": {
      body.style.visibility = event.data.state ? "visible" : "hidden";
      if (event.data.state) {
        eyeElement.classList.add("show");
      } else {
        eyeElement.classList.remove("show");
      }
      eye.style.transition = "fill 1.5s ease";
      return (eye.style.fill = "url(#gradient2)");
    }

    case "leftTarget": {
      eye.style.transition = "fill 1.5s ease";
      eye.style.fill = "url(#gradient2)";

      return (eye.style.fill = "url(#gradient2)");
    }

    case "setTarget": {
      eye.style.transition = "fill 1.5s ease";
      eye.style.fill = "url(#gradient)";

      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }

      if (event.data.zones) {
        for (let i = 0; i < event.data.zones.length; i++) {
          event.data.zones[i].forEach((data, id) => {
            createOptions("zones", data, id + 1, i + 1);
          });
        }
      }
    }
  }
});
