const weightColor = d3.scaleLinear()
	.domain([0, 3.5]) // Adjust the domain based on the range of moonquake magnitudes in your data
	.range(['lightblue', 'darkred'])
	.clamp(true);

const myGlobe = Globe()
	.globeImageUrl('assets/moon_texture.jpg')
	.bumpImageUrl('assets/moon_displacement_texture.jpg')
	.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
	.showGraticules(false)
	.showAtmosphere(false) // moon has no atmosphere
	.hexBinPointLat(d => d.lat)
	.hexBinPointLng(d => d.lng)
	.hexBinPointWeight(d => d.magnitude)
	.hexAltitude(({
		sumWeight
	}) => sumWeight * 0.20)
	.hexTopColor(d => weightColor(d.sumWeight))
	.hexSideColor(d => weightColor(d.sumWeight))
	.hexLabel(d => `
    <b>Moonquake Info:<ul><li>
      ${d.points.map(point => `Date: ${point.date}, Magnitude: ${point.magnitude}`).join('</li><li>')}
    </li></ul>
  `)
	(document.getElementById('globeViz4'));

// Fetch your data from your JSON file
fetch('./data/all_data.json') // Replace 'your_json_file.json' with the correct path to your JSON file
	.then(res => res.json())
	.then(moonquakes => {
		// Convert your data to the format expected by the globe visualization
		const moonquakeFeatures = moonquakes.map(moonquake => ({
			lat: moonquake.lat,
			lng: moonquake.lng,
			magnitude: moonquake.magnitude,
			date: moonquake.date,
		}));

		// Set the moonquake data for visualization
		myGlobe.hexBinPointsData(moonquakeFeatures);
	})
	.catch(error => console.error(error));