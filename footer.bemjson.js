({
    block: 'footer',
    content: [
        {
            elem: 'col',
            mods: { position: 'left' },
            content: [
                { block: 'logo' },
                { block: 'social', providers: ['vk', 'facebook', 'twitter'] },
                { block: 'copyright' }
            ]
        },
        {
            elem: 'col',
            mods: { position: 'right' },
            content: [
                {
                    block: 'menu',
                    mods: { section: 'learning' },
                    content: [
                        { elem: 'title', content: 'Обучение' },
                        {
                            elem: 'list',
                            content: [
                                { elem: 'item', url: '/learn_map', title: 'Карта обучения' },
                                { elem: 'item', url: '/courses', title: 'Онлайн-курсы' },
                                { elem: 'item', url: '/intensive', title: 'Интенсив' },
                                { elem: 'item', url: '/pricing', title: 'Подписка' },
                                { elem: 'item', url: '/rating', title: 'Рейтинг' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
