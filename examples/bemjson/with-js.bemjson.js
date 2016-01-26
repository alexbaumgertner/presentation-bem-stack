// with javascript code
({
    content: (function () {
        var items = ['main', 'about', 'contacts'];

        return items.map(function(item) {
            return {
                block: item,
                content: 'content of ' + item
            };
        });
    }())
});
