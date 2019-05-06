import mediumZoom from "medium-zoom";

import styles from "./index.scss"; // eslint-disable-line

mediumZoom(".zoomable", { margin: 24 });

const video = document.getElementById("video");
const videoPreview = document.getElementById("video-preview");
const videoIframe = document.getElementById("video-iframe");
video.addEventListener("click", event => {
  event.preventDefault();
  videoPreview.style.display = "none";
  videoIframe.src += "&autoplay=1";
});
