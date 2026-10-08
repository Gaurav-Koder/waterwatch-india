# WaterWatch India — video-fixed package

Folder layout:

waterwatch_india/
├── index.html
├── style.css
├── script.js
├── water-monitoring-project.mp4
└── assets/
    └── video-poster.jpg

IMPORTANT: keep `water-monitoring-project.mp4` in the same folder as `index.html`. Do not move it into `assets` unless you also change the HTML path.

The video is encoded as H.264 + AAC with fast-start metadata for web playback.

For Netlify, upload/deploy this whole folder (not just index.html).


## Evidence update
Version 5 replaces illustrative dashboard graphs with three evidence charts based directly on CPCB's published Yamuna report: pH (Figure 2), dissolved oxygen (Figure 3), and BOD (Figure 4). The charts are explicitly labelled as recreated from the official report and historical (March/April 2020). The website also links to the current National Water Data Portal CPCB datasets for newer observations.
