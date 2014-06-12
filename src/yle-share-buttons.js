var shareButton = (function() {

    function bind(element, eventName, func) {
        if (element !== null) {
            if (element.addEventListener) {
                element.addEventListener(eventName, function(e) {
                    e.preventDefault();
                    func();
                }, false);
            }
            //IE 7,8
            else if (element.attachEvent) {
                element.attachEvent('on' + eventName, function(e) {
                    e.preventDefault();
                    func();
                }, false);
            }
        }
    }

    var open = function open(args) {
        return function() {
            window.open(args.url + encodeURIComponent(window.location), '_blank', 'toolbar=0,location=1,directories=1,status=1,menubar=0,scrollbars=1,resizable=1,width=' + args.width + ',height=' + args.height);
        };
    };

    bind(document.getElementById('yle-share-buttons-facebook'), 'click', open({
        url: 'https://www.facebook.com/sharer/sharer.php?u=',
        width: 650,
        height: 313
    }));
    bind(document.getElementById('yle-share-buttons-twitter'), 'click', open({
        url: 'https://twitter.com/intent/tweet?text=',
        width: 680,
        height: 260
    }));
    bind(document.getElementById('yle-share-buttons-linkedin'), 'click', open({
        url: 'http://www.linkedin.com/shareArticle?url=',
        width: 600,
        height: 500
    }));
    bind(document.getElementById('yle-share-buttons-googleplus'), 'click', open({
        url: 'https://plus.google.com/share?url=',
        width: 484,
        height: 510
    }));
    bind(document.getElementById('yle-share-buttons-pinterest'), 'click', open({
        url: 'http://pinterest.com/pin/create/button/?url=',
        width: 750,
        height: 288
    }));

    var script = document.createElement('script');
    script.src = 'http://ojalehto.fi/share-counter/shares/total?url=' + encodeURIComponent(window.location) + '&id=1&callback=shareButton.setCount';
    document.body.appendChild(script);

    return {
        setCount: function(jsonp) {
            if (!isNaN(jsonp.facebook)) {
                document.getElementById('yle-share-buttons-facebook-share-count').innerHTML = jsonp.facebook;
            }
            if (!isNaN(jsonp.twitter)) {
                document.getElementById('yle-share-buttons-twitter-share-count').innerHTML = jsonp.twitter;
            }
            if (!isNaN(jsonp.linkedIn)) {
                document.getElementById('yle-share-buttons-linkedin-share-count').innerHTML = jsonp.linkedIn;
            }
            if (!isNaN(jsonp.googlePlus)) {
                document.getElementById('yle-share-buttons-googleplus-share-count').innerHTML = jsonp.googlePlus;
            }
            if (!isNaN(jsonp.pinterest)) {
                document.getElementById('yle-share-buttons-pinterest-share-count').innerHTML = jsonp.pinterest;
            }
        }
    };

})();