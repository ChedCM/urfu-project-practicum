// @ts-check
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '📚 Введение',
      items: ['intro/index', 'intro/how-to-use'],
    },
    {
      type: 'category',
      label: '📱 Платформы',
      items: [
        'platforms/vk-login',
        'platforms/vk-privacy',
        'platforms/tg-basic',
        'platforms/tg-privacy',
        'platforms/max-2fa',
        'platforms/max-privacy',
      ],
    },
    {
      type: 'category',
      label: '🎮 Интерактивы',
      items: ['interactive/checklist', 'interactive/test'],
    },
    {
      type: 'category',
      label: '📖 Справочник',
      items: ['reference/dictionary', 'reference/recovery'],
    },
  ],
};

module.exports = sidebars;