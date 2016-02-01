// match `menu` block in BEMJSON
block('menu')(
    // match `list` element of `menu` block (`menu__list`)
    elem('list')( tag()('ul') ),

    // match `item` element of `menu` block (`menu__item`)
    elem('item')( tag()('li'), content()(function() {
            return {
                block: 'link',
                tag: 'a',
                attrs: { href: this.ctx.url },
                content: this.ctx.title
            };
        }) )
);
