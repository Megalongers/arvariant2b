// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => {

    const viewer = document.querySelector("model-viewer");

    if (!viewer) {
        console.error("model-viewer element not found");
        return;
    }

    // Loading state
    viewer.addEventListener("load", () => {
        console.log("3D model loaded successfully");

        const status = document.getElementById("status");
        if (status) {
            status.textContent = "Model loaded";
        }
    });

    // Error handling
    viewer.addEventListener("error", (event) => {
        console.error("Failed to load model:", event);

        const status = document.getElementById("status");
        if (status) {
            status.textContent = "Failed to load model";
        }
    });

    // AR availability detection
    if (!viewer.canActivateAR) {
        console.log("AR not available on this device/browser");

        const arButton = document.querySelector("[slot='ar-button']");
        if (arButton) {
            arButton.style.display = "none";
        }
    }

});