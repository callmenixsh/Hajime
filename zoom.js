function detectZoomLevel() {
    var zoomLevel = Math.round((window.innerWidth / window.outerWidth) * 100);

    if (zoomLevel < 55) {
        // Zoomed in too much
        document.body.classList.add('zoomed-in-warning');
    } else if (zoomLevel > 180) {
        // Zoomed out too mucg
        document.body.classList.add('zoomed-out-warning');
    } else {
        document.body.classList.remove('zoomed-in-warning');
        document.body.classList.remove('zoomed-out-warning');
    }
}

window.addEventListener('load', detectZoomLevel);
window.addEventListener('resize', detectZoomLevel);
