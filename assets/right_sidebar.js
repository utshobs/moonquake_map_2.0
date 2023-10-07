
// Add zoom-in and zoom-out controls
const zoomInButton = document.getElementById('zoomInButton');
const zoomOutButton = document.getElementById('zoomOutButton');

zoomInButton.addEventListener('click', () => {
    moon.camera().fov -= 5;
    moon.camera().updateProjectionMatrix();
});

zoomOutButton.addEventListener('click', () => {
    moon.camera().fov += 5;
    moon.camera().updateProjectionMatrix();
});

// Add rotation speed control
const rotationSpeedSlider = document.getElementById('rotationSpeedSlider');

rotationSpeedSlider.addEventListener('input', (event) => {
    const rotationSpeed = parseFloat(event.target.value);
    moon.controls().autoRotateSpeed = rotationSpeed;
});

// Add auto-rotation toggle button and event listener
const autoRotationToggle = document.getElementById('autoRotationToggle');
let isAutoRotating = false;

autoRotationToggle.addEventListener('click', () => {
    isAutoRotating = !isAutoRotating;
    moon.controls().autoRotate = isAutoRotating;
});


//All toggle buttons

$(document).ready(function () {


    // Day/Night terminator - Toggle 1
    $(".toggle-1").on("click", function () {
        if ($(this).is(":checked")) {

            $("#globeViz").hide();
            $("#globeViz4").show();
            // Toggle 1 is ON
            // console.log("Toggle 1 is ON");
        } else {
            $("#globeViz4").hide();
            $("#globeViz").show();
            
        }
    });

    // Lattitude and longitude - Toggle 2
    $(".toggle-2").on("click", function () {
        if ($(this).is(":checked")) {
            moon.showGraticules(true);
            
        } else {
            moon.showGraticules(false);
            
        }
    });

    // Topgraphic Map - Toggle 2
    $(".toggle-3").on("click", function () {
        if ($(this).is(":checked")) {
            
            $("#globeViz").hide();
            $("#globeViz3").show();

        } else {
            
            $("#globeViz3").hide();
            $("#globeViz").show();
        }
    });

    // Toggle button state on click for Toggle 3
    $(".toggle-4").on("click", function () {
        if ($(this).is(":checked")) {
            
            $("#globeViz").hide();
            $("#globeViz5").show();
        } else {
            
            $("#globeViz5").hide();
            $("#globeViz").show();
        }
    });

    $(".toggle-5").on("click", function () {
        if ($(this).is(":checked")) {
            
            $("#globeViz").hide();
            $("#globeViz5").show();
        } else {
            // Toggle 3 is OFF
            $("#globeViz5").hide();
            $("#globeViz").show();
        }
    });
});

// Slider value
const slider = document.getElementById("slider2");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", function () {
    sliderValue.textContent = slider.value;
});

