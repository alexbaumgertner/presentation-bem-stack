(function() {
    var
        sampleNodes = document.querySelectorAll('.sample-frame'),
        forEach = Array.prototype.forEach;

    // TODO: try http://prismjs.com/plugins/line-numbers/

    forEach.call(sampleNodes, function(sampleNode) {
        var
            src = sampleNode.dataset.src,
            lang = sampleNode.dataset.lang,
            fileType = src.split('.').pop(),
            editor = ace.edit(sampleNode);

        if (fileType === 'js') {
            fileType = 'javascript';
        }

        fetch(sampleNode.dataset.src)
            .then(function(response) {
                return response.text()
            })
            .then(function(code) {

                if (lang === 'bemhtml') {

                    editor.getSession().setValue(code);

                } else {
                    editor.getSession().setValue(code);
                }

                editor.getSession().setMode('ace/mode/' + fileType);
            })
    });

}());