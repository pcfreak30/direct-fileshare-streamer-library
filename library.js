var $DFS = (function () {
    var domains = {
        "nowvideo.sx": function(){
        }
    };
    return {
        init: function (domain) {
            if(domains.hasOwnProperty(domain))
            {
                domains[domain]();
            }
        }

    };
})();