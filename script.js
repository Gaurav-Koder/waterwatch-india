const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = h > 0 ? (window.scrollY / h * 100) + '%' : '0%';
});

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('navLinks');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const params = {
  ph:{value:'7.2',unit:'pH',title:'pH',desc:'pH indicates how acidic or alkaline the water is. It is one part of a wider water-quality assessment and should be interpreted with other measurements.',fill:52},
  do:{value:'6.8',unit:'mg/L',title:'Dissolved Oxygen',desc:'Dissolved oxygen is the oxygen available in water. It is important for aquatic organisms and can change with temperature, organic pollution and other conditions.',fill:68},
  bod:{value:'3.1',unit:'mg/L',title:'BOD',desc:'Biochemical Oxygen Demand indicates the amount of oxygen that microorganisms may use while breaking down biodegradable organic matter.',fill:31},
  turbidity:{value:'4.2',unit:'NTU',title:'Turbidity',desc:'Turbidity describes water cloudiness caused by suspended particles. It can increase after runoff, erosion or disturbance.',fill:42},
  tds:{value:'286',unit:'mg/L',title:'Total Dissolved Solids',desc:'TDS represents dissolved substances in water. It is useful as a general indicator, but does not by itself identify which substances are present.',fill:46},
  coliform:{value:'120',unit:'MPN/100mL',title:'Coliforms',desc:'Coliform measurements can be used as indicators of microbial contamination and are interpreted according to the purpose and classification of the water body.',fill:60}
};

document.querySelectorAll('.param').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.param').forEach(x => x.classList.remove('active'));
  btn.classList.add('active');
  const p = params[btn.dataset.param];
  document.getElementById('paramValue').textContent = p.value;
  document.getElementById('paramUnit').textContent = p.unit;
  document.getElementById('paramTitle').textContent = p.title;
  document.getElementById('paramDesc').textContent = p.desc;
  document.getElementById('scaleFill').style.width = p.fill + '%';
}));

const projectVideo = document.getElementById('projectVideo');
if (projectVideo) {
  projectVideo.muted = false;
  projectVideo.volume = 1.0;
  projectVideo.addEventListener('loadedmetadata', () => {
    projectVideo.muted = false;
    projectVideo.volume = 1.0;
  });
  projectVideo.addEventListener('error', () => {
    const note = document.createElement('div');
    note.className = 'video-error';
    note.textContent = 'The video file could not be loaded. Make sure water-monitoring-project.mp4 is in the same folder as index.html.';
    projectVideo.parentElement.insertAdjacentElement('afterend', note);
  }, {once:true});
}
