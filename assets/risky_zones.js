const colorScale = d3.scaleOrdinal(['yellow', 'red', 'darkgreen', 'yellow']);


const elem = document.getElementById('globeViz5');
const moon = Globe()
  .globeImageUrl('assets/moon_texture.jpg')
  .bumpImageUrl('assets/moon_displacement_texture.jpg')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
  .showGraticules(true)
  .showAtmosphere(false) // moon has no atmosphere
  .labelText('label')
  .labelSize(1.7)
  .labelDotRadius(0.8)
  .labelColor(d => colorScale(d.label == "Ocean of Storms"))
  .onLabelClick(d => window.open("https://public.tableau.com/app/profile/abdul.muhaimin.adeeb/viz/Book3_16965103338840/Dashboard2?publish=yes", '_blank'))
  (elem);

fetch('./data/risky_zones.json').then(r => r.json()).then(landingSites => {
  moon.labelsData(landingSites);
});