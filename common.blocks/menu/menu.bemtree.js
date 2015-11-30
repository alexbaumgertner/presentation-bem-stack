// match `menu` block
block('menu')(
    content()(function() {

        var ctx = this.ctx,
            content = ({
                block: 'menu',
                mods: { section: 'learning' },
                content: [
                    { elem: 'title', content: ctx.title },
                    {
                        elem: 'list',
                        content: ctx.items.map(
                            function(item) {
                                return {
                                    elem: 'item',
                                    url: item.url,
                                    title: item.title
                                };
                            })
                    }
                ]
            });

        return content;
    })
);
