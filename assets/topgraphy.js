const elem = document.getElementById('globeViz3');
		const moon = Globe()
			.globeImageUrl('assets/topography.jpg')
			.bumpImageUrl('')
			.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
			.showGraticules(true)
			.showAtmosphere(false) // moon has no atmosphere
			.labelText('id')
			.labelSize(1.7)
			.labelDotRadius(0.4)
			.labelDotOrientation(d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom')
			.labelColor(d => colorScale(d.agency))
			.labelLabel(d => `
	              <div><b>${d.id}</b></div>
	              <div>${d.agency} - ${d.program} Program</div>
	              <div>Landing on <i>${new Date(d.date).toLocaleDateString()}</i></div>
	                        `)
			.onLabelClick(d => window.open(d.url, '_blank'))
			(elem);