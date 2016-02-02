
// Запрос за данными
request.get('/index/json', function(error, JSON) {

  // JSON => BEMJSON ( Database Data => View data)
  BEMTREE
      .apply(JSON)
      .then(function(BEMJSON) {

        // View data => Browser code (HTML)
        var html = BEMHTML.apply(BEMJSON);

        response.send(html);
      });
});
