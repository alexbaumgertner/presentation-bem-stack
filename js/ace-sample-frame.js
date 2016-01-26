(function(global) {
    var aceSrc = 'https://cdn.jsdelivr.net/g/ace@1.2.3(' +
        'noconflict/ace.js+' +
        'noconflict/mode-html.js+' +
        'noconflict/theme-chrome.js+' +
        'noconflict/mode-json.js)';

    loader(global.document, aceSrc, run);

    function run() {
        var
            sampleNodes = global.document.querySelectorAll('.ace-sample-frame'),
            forEach = global.Array.prototype.forEach;

        // TODO: try http://prismjs.com/plugins/line-numbers/

        forEach.call(sampleNodes, function (sampleNode) {
            var
                src = sampleNode.dataset.src,
                lang = sampleNode.dataset.lang,
                fileType = src.split('.').pop(),
                editor = ace.edit(sampleNode);

            // fix deprecated
            editor.$blockScrolling = Infinity;

            if (fileType === 'js') {
                fileType = 'javascript';
            }

            fetch(sampleNode.dataset.src)
                .then(function (response) {
                    return response.text()
                })
                .then(function (code) {

                    if (lang === 'bemhtml') {

                        editor.getSession().setValue(code);

                    } else {
                        editor.getSession().setValue(code);
                    }

                    editor.getSession().setMode('ace/mode/' + fileType);
                })
        });
    }


    /**
     * Load javascript
     *
     * @param {Object} document
     * @param {String} path
     * @param {Function} callback
     */
    function loader(document, path, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');

        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = (location.protocol === 'file:' && !path.indexOf('//') ? 'http:' : '') + path;

        if ('onload' in script) {
            script.onload = script.onerror = function () {
                script.onload = script.onerror = null;
                callback();
            };

        } else {
            script.onreadystatechange = function () {
                var readyState = this.readyState;

                if (readyState === 'loaded' || readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        }

        head.appendChild(script);
    }

}(window));
