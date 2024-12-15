// Add DOM
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year automatically
    const year = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = `&copy; ${year} Wisepace. All rights reserved.`;
});