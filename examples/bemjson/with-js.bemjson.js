// javascript code in BEMJSON
({
    block: 'menu',
    content: (function (items) {
        // Прототип меню
        return items.map(function(item) {
            return {
                block: 'menu',
                elem: 'item',
                content: {
                    // https://github.com/bem/bem-components/blob/v2/common.blocks/link/link.ru.md
                    block: 'link',
                    url: '/' + item,
                    content: item
                }
            };
        });
    }(
      // Пункты меню
      ['main', 'about', 'contacts']
    ))
});
