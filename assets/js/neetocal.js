window.neetoCal = window.neetoCal || { embed: function(){(neetoCal.q=neetoCal.q||[]).push(arguments)} };

(function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = "https://wisepace.neetocal.com/javascript/embed.js";
    script.onload = function() {
        neetoCal.embed({
            type: "elementClick",
            id: "5ce42c52-b02c-4ee3-909b-11a9a639196f",
            organization: "wisepace",
            elementSelector: "#open-popup-button",
            isSidebarAndCoverImgHidden: "true"
        });
    };
    document.head.appendChild(script);
})();