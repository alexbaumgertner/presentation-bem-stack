// Ace editor loader
(function(global) {
  var aceSrc = 'https://cdn.jsdelivr.net/g/ace@1.2.3(' +
    'noconflict/ace.js+' +
    'noconflict/mode-html.js+' +
    'noconflict/theme-chrome.js+' +
    'noconflict/mode-json.js)';

  var aceEditorsLoader = new Promise(function(resolve, reject) {
    loader(global.document, aceSrc)
      .then(aceEditorsInit)
      .then(function(aceEditorsPromises) {
        Promise
          .all(aceEditorsPromises)
          .then(function(result) {
            resolve(result);
          });
      });
  });

  /**
   * Init Ace editors on DOM nodes
   *
   * @returns {Array} Promises
   */
  function aceEditorsInit() {

    var sampleNodes = global.document.querySelectorAll('.ace-sample-frame'),
      samplePromises = [],
      forEach = global.Array.prototype.forEach;

    // TODO: try http://prismjs.com/plugins/line-numbers/

    forEach.call(sampleNodes, function(sampleNode) {
      var promiseResolver;

      var promise = new Promise(function(resolve, reject) {
        promiseResolver = resolve;
      });

      samplePromises.push(promise);

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
        .then(function(response) {
          return response.text()
        })
        .then(function(code) {
          editor.getSession().setValue(code);
          editor.getSession().setMode('ace/mode/' + fileType);

          sampleNode.aceEditor = editor;
          promiseResolver({ editor: editor, code: code });
        });
    });

    return samplePromises;
  }

  /**
   * Load javascript
   *
   * @param {Object} document
   * @param {String} path
   * @return {Object} Promise
   */
  function loader(document, path) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    var callback;

    var promise = new Promise(function(resolve, reject) {
      callback = resolve;
    });

    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = (location.protocol === 'file:' && !path.indexOf('//') ? 'http:' : '') + path;

    if ('onload' in script) {
      script.onload = script.onerror = function() {
        script.onload = script.onerror = null;
        callback();
      };

    } else {
      script.onreadystatechange = function() {
        var readyState = this.readyState;

        if (readyState === 'loaded' || readyState === 'complete') {
          script.onreadystatechange = null;
          callback();
        }
      };
    }

    head.appendChild(script);

    return promise;
  }


  aceEditorsLoader
    .then(function(result) {
      var doc = global.document;

      var BEMHTML = global['BEMHTML_BARE'];
      var bemjsonNode = doc.getElementById('logo-example-bemjson');
      var bemhtmlNode = doc.getElementById('logo-bemhtml');
      var htmlNode = doc.getElementById('logo-sample-html');

      console.log("bemjsonNode.aceInit: ", bemjsonNode.aceEditor);
    });

}(window));
