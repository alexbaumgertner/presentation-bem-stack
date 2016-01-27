block('logo')(
    content()(function() {
        return [
            {
                block: 'icon',
                url: '/logo.png',
                mix: [{ block: 'logo', elem: 'logo' }]
            },
            {
                elem: 'text',
                tag: 'span',
                content: 'HTML Academy'
            }
        ];
    })
);

block('icon')(
    tag()('img'),
    attrs()(function() {
        return {
            src: this.ctx.url
        };
    })
);
