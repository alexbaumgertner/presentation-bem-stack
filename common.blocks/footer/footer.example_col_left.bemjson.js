({
    block: 'footer',
    content: [
        {
            elem: 'col',
            elemMods: { position: 'left' },
            content: [
                { block: 'logo' },
                { 
                    block: 'social', 
                    providers: ['vk', 'facebook', 'twitter'] 
                },
                { block: 'copyright' }
            ]
        },
        {
            elem: 'col'
            /* ... */
        }
    ]
});
