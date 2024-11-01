window.neetoCal = window.neetoCal || { embed: function(){(neetoCal.q=neetoCal.q||[]).push(arguments)} };

document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = "https://wisepace.neetocal.com/javascript/embed.js";
    script.onload = function() {
        neetoCal.embed({
            type: "elementClick",
            id: "0a7f15d6-b793-4403-b7cd-841d178a4a9d",
            organization: "wisepace-team",
            elementSelector: "#open-popup-button",
            isSidebarAndCoverImgHidden: "true"
        });
        neetoCal.embed({
            type: "elementClick",
            id: "0a7f15d6-b793-4403-b7cd-841d178a4a9d",
            organization: "wisepace-team",
            elementSelector: "#mobile-open-popup-button",
            isSidebarAndCoverImgHidden: "true"
        });
    };
    document.head.appendChild(script);
});