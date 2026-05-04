---
sidebar_position: 2
title: Telegram — приватность и скрытые чаты
description: Как скрыть номер телефона, фото профиля и настроить скрытые чаты в Telegram
---

import TelegramLogo from '@site/static/img/telegram_logo.png';
import Img6 from '@site/static/tg_img/img6.png';
import Img7 from '@site/static/tg_img/img7.png';
import Img8 from '@site/static/tg_img/img8.png';
import Img9 from '@site/static/tg_img/img9.png';
import Img10 from '@site/static/tg_img/img10.png';
import Img11 from '@site/static/tg_img/img11.png';

<div className="content-card">
  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
    <div style={{ 
      width: '100px', 
      height: '100px', 
      background: 'linear-gradient(135deg, #0088cc 0%, #00a8e8 100%)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      margin: '0 auto 1rem'
    }}>
      <img src={TelegramLogo} alt="Telegram" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
    </div>
    <h1 style={{ color: 'var(--color-telegram)', marginBottom: '0.5rem' }}>Telegram</h1>
    <p style={{ color: '#718096', fontSize: '1.1rem' }}>Приватность и скрытые чаты</p>
  </div>

  <h2 style={{ color: 'var(--color-telegram)', marginTop: '2rem' }}>🔒 Настройка приватности профиля</h2>

  <h3 style={{ marginTop: '1.5rem', color: '#718096' }}>Кто видит ваш номер телефона</h3>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Конфиденциальность</strong>
    <p><strong>Настройки</strong> → <strong>Конфиденциальность</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите Номер телефона</strong>
    <p>Выберите <strong>Номер телефона</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Установите уровень доступа</strong>
    <p>Установите один из вариантов:</p>
    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
      <li><strong>Никто</strong> — максимальная защита</li>
      <li><strong>Мои контакты</strong> — только те, кто у вас в адресной книге</li>
      <li><strong>Все</strong> — не рекомендуется</li>
    </ul>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img6} alt="Настройки приватности номера телефона" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 6: Настройки номера телефона</p>
  </div>

  <div className="info-box info">
    <strong>💡 Рекомендация:</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Выберите <strong>Никто</strong> или <strong>Мои контакты</strong> для максимальной приватности.
    </p>
  </div>

  <h3 style={{ marginTop: '1.5rem', color: '#718096' }}>Кто видит ваше фото профиля</h3>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Конфиденциальность</strong>
    <p><strong>Настройки</strong> → <strong>Конфиденциальность</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите Фотографии профиля</strong>
    <p>Выберите <strong>Фотографии профиля</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Контакты</strong>
    <p>Рекомендуем: <strong>Контакты</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img7} alt="Настройки фото профиля" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 7: Настройки фото</p>
  </div>

  <h3 style={{ marginTop: '1.5rem', color: '#718096' }}>Кто видит время последнего посещения</h3>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Конфиденциальность</strong>
    <p><strong>Настройки</strong> → <strong>Конфиденциальность</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите Время захода</strong>
    <p>Выберите <strong>Время захода</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Никто или Контакты</strong>
    <p>Рекомендуем: <strong>Никто</strong> или <strong>Контакты</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img8} alt="Настройки времени последнего посещения" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 8: Настройки времени захода</p>
  </div>

  <h3 style={{ marginTop: '1.5rem', color: '#718096' }}>Кто может пересылать ваши сообщения</h3>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Конфиденциальность</strong>
    <p><strong>Настройки</strong> → <strong>Конфиденциальность</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите Пересылка сообщений</strong>
    <p>Выберите <strong>Пересылка сообщений</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Никто</strong>
    <p>Рекомендуем: <strong>Никто</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img9} alt="Настройки пересылки сообщений" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 9: Настройки пересылки</p>
  </div>

  <h2 style={{ color: 'var(--color-telegram)', marginTop: '2rem' }}>🔐 Скрытые чаты</h2>
  
  <div className="info-box success">
    <strong>🌟 Что это такое?</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Скрытые чаты — это чаты с <strong>сквозным шифрованием</strong>. 
      Они не синхронизируются между устройствами и защищены дополнительным паролем или биометрией.
    </p>
  </div>

  <h3 style={{ marginTop: '1.5rem' }}>Как создать скрытый чат</h3>

  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте профиль контакта</strong>
    <p>Откройте профиль нужного контакта</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Нажмите Ещё</strong>
    <p>Нажмите <strong>Ещё</strong> (три точки ⋮)</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Выберите Начать скрытый чат</strong>
    <p>Выберите <strong>Начать скрытый чат</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img11} alt="Создание скрытого чата" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 11: Создание скрытого чата</p>
  </div>

  <div className="info-box info">
    <strong>💡 Альтернативный способ:</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      В списке чатов сделайте <strong>свайп влево</strong> по имени контакта 
      и выберите <strong>Скрытый чат</strong>.
    </p>
  </div>

  <h2 style={{ color: 'var(--color-telegram)', marginTop: '2rem' }}>👥 Кто может добавлять вас в группы и каналы</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Конфиденциальность</strong>
    <p><strong>Настройки</strong> → <strong>Конфиденциальность</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите Приглашения</strong>
    <p>Выберите <strong>Приглашения</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Рекомендуем: Контакты или Никто</strong>
    <p>Рекомендуем: <strong>Контакты</strong> или <strong>Никто</strong></p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img10} alt="Настройки приглашений в группы" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 10: Настройки приглашений</p>
  </div>

  <div className="info-box success" style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center' }}>
    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
    <h3 style={{ marginBottom: '0.5rem' }}>Готово!</h3>
    <p style={{ margin: 0 }}>
      Теперь ваш профиль в Telegram защищён от посторонних глаз. 
      Только вы контролируете, кто видит вашу информацию!
    </p>
  </div>
</div>