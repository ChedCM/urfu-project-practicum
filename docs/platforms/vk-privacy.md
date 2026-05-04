---
sidebar_position: 2
title: VK — защита данных
description: Как настроить приватность профиля, сообщений и контактов в VK
---

import VKLogo from '@site/static/img/VK_logo.png';
import PrImg1 from '@site/static/vk_img/pr_img1.png';
import PrImg2 from '@site/static/vk_img/pr_img2.png';
import PrImg3 from '@site/static/vk_img/pr_img3.png';
import PrImg4 from '@site/static/vk_img/pr_img4.png';
import PrImg5 from '@site/static/vk_img/pr_img5.png';
import PrImg6 from '@site/static/vk_img/pr_img6.png';

<div className="content-card">
  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
    <div style={{ 
      width: '100px', 
      height: '100px', 
      background: 'linear-gradient(135deg, #4a76a8 0%, #5b8fc7 100%)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      margin: '0 auto 1rem'
    }}>
      <img src={VKLogo} alt="VK" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
    </div>
    <h1 style={{ color: 'var(--color-vk)', marginBottom: '0.5rem' }}>ВКонтакте</h1>
    <p style={{ color: '#718096', fontSize: '1.1rem' }}>Защита данных и приватность</p>
  </div>

  <h2 style={{ color: 'var(--color-vk)', marginTop: '2rem' }}>🔒 Настройка приватности профиля</h2>

  <h3 style={{ marginTop: '1.5rem', color: '#718096' }}>Кто видит мои фотографии</h3>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Приватность</strong>
    <p><strong>Настройки</strong> → <strong>Приватность</strong> → <strong>Моя страница</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите видимость фото</strong>
    <p>Выберите <strong>Кто видит мои сохранённые фотографии</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Только я или Все друзья</strong>
    <p>Рекомендуем: <strong>Только я</strong> или <strong>Все друзья</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={PrImg1} alt="Настройки видимости фотографий" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 1: Настройки фотографий</p>
  </div>

  <h3 style={{ marginTop: '1.5rem', color: '#718096' }}>Кто может писать мне личные сообщения</h3>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Связь со мной</strong>
    <p><strong>Настройки</strong> → <strong>Приватность</strong> → <strong>Связь со мной</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите сообщения</strong>
    <p>Выберите <strong>Кто может писать мне личные сообщения</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Друзья</strong>
    <p>Рекомендуем: <strong>Друзья и друзья друзей</strong> или <strong>Все друзья</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={PrImg6} alt="Настройки личных сообщений" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 6: Настройки сообщений</p>
  </div>

  <h3 style={{ marginTop: '1.5rem', color: '#718096' }}>Кто может комментировать мои записи</h3>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Посты в профиле</strong>
    <p><strong>Настройки</strong> → <strong>Приватность</strong> → <strong>Посты в профиле</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите комментарии</strong>
    <p>Выберите <strong>Кто может комментировать мои посты</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Все друзья</strong>
    <p>Рекомендуем: <strong>Все друзья</strong> или <strong>Только я</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={PrImg2} alt="Настройки комментариев" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 2: Настройки комментариев</p>
  </div>

  <h2 style={{ color: 'var(--color-vk)', marginTop: '2rem' }}>🔍 Кто может найти меня по номеру телефона</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Связь со мной</strong>
    <p><strong>Настройки</strong> → <strong>Приватность</strong> → <strong>Связь со мной</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите поиск по номеру</strong>
    <p>Выберите <strong>Кто может найти мой номер при импорте контактов</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Друзья или Никто</strong>
    <p>Рекомендуем: <strong>Друзья и друзья друзей</strong> или <strong>Никто</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={PrImg3} alt="Настройки поиска по номеру" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 3: Настройки поиска</p>
  </div>

  <h2 style={{ color: 'var(--color-vk)', marginTop: '2rem' }}>👻 Как скрыть профиль из поиска</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Прочее</strong>
    <p><strong>Настройки</strong> → <strong>Приватность</strong> → <strong>Прочее</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите видимость в интернете</strong>
    <p>Выберите <strong>Кому в интернете видна моя страница</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Только пользователям VK</strong>
    <p>Рекомендуем: <strong>Только пользователям VK</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={PrImg4} alt="Скрытие профиля из поиска" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 4: Настройки видимости</p>
  </div>

  <h2 style={{ color: 'var(--color-vk)', marginTop: '2rem' }}>📢 Как ограничить отправку приглашений в сообщества</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Связь со мной</strong>
    <p><strong>Настройки</strong> → <strong>Приватность</strong> → <strong>Связь со мной</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите приглашения</strong>
    <p>Выберите <strong>Кто может приглашать меня в сообщества</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Все друзья</strong>
    <p>Рекомендуем: <strong>Все друзья</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={PrImg5} alt="Настройки приглашений в группы" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 5: Настройки приглашений</p>
  </div>

  <h2 style={{ color: 'var(--color-vk)', marginTop: '2rem' }}>🚨 Что делать с подозрительной активностью</h2>
  
  <div className="info-box warning" style={{ background: '#fff5f5', borderLeftColor: '#f56565' }}>
    <strong>Если вы заметили:</strong>
    <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.5rem' }}>
      <li>Незнакомые комментарии или записи от вашего имени</li>
      <li>Отправленные сообщения, которые вы не писали</li>
    </ul>
  </div>

  <h3 style={{ marginTop: '1.5rem' }}>Немедленно:</h3>

  <div className="step-card" style={{ background: '#fff5f5', borderLeftColor: '#f56565' }}>
    <strong><span className="step-number" style={{ background: '#f56565' }}>1</span>Завершите все сессии</strong>
    <p>Настройки → VK ID → Безопасность → Список устройств → <strong>Выйти на других устройствах</strong></p>
  </div>

  <div className="step-card" style={{ background: '#fff5f5', borderLeftColor: '#f56565' }}>
    <strong><span className="step-number" style={{ background: '#f56565' }}>2</span>Смените пароль</strong>
    <p>Придумайте новый надёжный пароль</p>
  </div>

  <div className="step-card" style={{ background: '#fff5f5', borderLeftColor: '#f56565' }}>
    <strong><span className="step-number" style={{ background: '#f56565' }}>3</span>Сообщите в поддержку VK</strong>
    <p>Перейдите на <a href="https://vk.com/support" target="_blank">vk.com/support</a></p>
  </div>

  <div className="info-box success" style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center' }}>
    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
    <h3 style={{ marginBottom: '0.5rem' }}>Готово!</h3>
    <p style={{ margin: 0 }}>
      Теперь ваш профиль VK защищён от посторонних. 
      Вы контролируете, кто видит вашу информацию и как с вами связаться!
    </p>
  </div>
</div>