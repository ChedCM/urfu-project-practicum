---
sidebar_position: 1
title: Telegram — базовая защита
description: Как включить двухфакторную аутентификацию и проверить активные сессии в Telegram
---

import TelegramLogo from '@site/static/img/telegram_logo.png';
import Img1 from '@site/static/tg_img/img1.png';
import Img2 from '@site/static/tg_img/img2.png';
import Img3 from '@site/static/tg_img/img3.png';
import Img4 from '@site/static/tg_img/img4.png';
import Img5 from '@site/static/tg_img/img5.png';

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
    <p style={{ color: '#718096', fontSize: '1.1rem' }}>Базовая защита аккаунта</p>
  </div>

  <div className="info-box info">
    <strong>💡 Зачем это нужно?</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Telegram хранит всю вашу переписку, контакты и медиафайлы в облаке. 
      Если злоумышленник получит доступ к вашему аккаунту — он увидит всё!
    </p>
  </div>

  <h2 style={{ color: 'var(--color-telegram)', marginTop: '2rem' }}>🔐 Как включить облачный пароль (2FA)</h2>
  
  <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '1.5rem' }}>
    Двухфакторная аутентификация (облачный пароль) защищает аккаунт даже в том случае, 
    если кто-то перехватил SMS-код.
  </p>

  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Telegram</strong>
    <p>Откройте приложение <strong>Telegram</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Перейдите в Настройки</strong>
    <p>Нажмите на иконку шестерёнки <strong>⚙️</strong> в нижнем меню</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Выберите Конфиденциальность</strong>
    <p>Выберите <strong>Конфиденциальность</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">4</span>Нажмите Облачный пароль</strong>
    <p>Нажмите <strong>Облачный пароль</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">5</span>Нажмите Задать пароль</strong>
    <p>Нажмите <strong>Задать пароль</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">6</span>Придумайте пароль</strong>
    <p>Придумайте надёжный пароль:</p>
    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
      <li>Минимум 6 символов</li>
      <li>Не используйте пароль от других сервисов</li>
      <li>Запишите его в менеджер паролей</li>
    </ul>
  </div>

  <div className="step-card">
    <strong><span className="step-number">7</span>Добавьте подсказку</strong>
    <p>Добавьте <strong>подсказку</strong> на случай, если забудете пароль</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">8</span>Укажите email</strong>
    <p>Укажите <strong>адрес электронной почты</strong> для восстановления доступа</p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img1} alt="Настройки конфиденциальности Telegram" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 1: Меню конфиденциальности</p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img2} alt="Установка облачного пароля" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 2: Установка пароля</p>
  </div>

  <div className="info-box warning">
    <strong>⚠️ Очень важно!</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Telegram <strong>не может сбросить облачный пароль</strong>, если вы его забудете. 
      Сохраните пароль в надёжном месте (менеджер паролей или зашифрованная заметка)!
    </p>
  </div>

  <h2 style={{ color: 'var(--color-telegram)', marginTop: '2rem' }}>📱 Как проверить активные сессии</h2>
  
  <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '1.5rem' }}>
    Активные сессии — это все устройства, где вы вошли в Telegram.
  </p>

  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Настройки</strong>
    <p>Откройте <strong>Настройки</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Выберите Устройства</strong>
    <p>Выберите <strong>Устройства</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Проверьте список</strong>
    <p>Вы увидите список всех активных сессий:</p>
    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
      <li>Тип устройства (iPhone, Android, Web)</li>
      <li>Примерное местоположение</li>
      <li>Дата последней активности</li>
    </ul>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img3} alt="Список активных сессий" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 3: Активные сессии</p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img4} alt="Информация об устройстве" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 4: Информация о сессии</p>
  </div>

  <div className="info-box warning">
    <strong>🚨 Если увидели незнакомое устройство:</strong>
    <ol style={{ margin: '0.5rem 0 0', paddingLeft: '1.5rem' }}>
      <li>Нажмите на него</li>
      <li>Выберите <strong>Завершить</strong></li>
    </ol>
  </div>

  <h2 style={{ color: 'var(--color-telegram)', marginTop: '2rem' }}>🚫 Как завершить все сессии кроме текущей</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Настройки</strong>
    <p><strong>Настройки</strong> → <strong>Устройства</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Нажмите Завершить все другие сеансы</strong>
    <p>Нажмите <strong>Завершить все другие сеансы</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Подтвердите действие</strong>
    <p>Подтвердите действие</p>
  </div>

  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <img src={Img5} alt="Завершение всех сессий" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
    <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>Рисунок 5: Завершение сессий</p>
  </div>

  <div className="info-box info">
    <strong>🔁 Рекомендация:</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Рекомендуется завершать все сессии <strong>раз в 1–2 месяца</strong> для безопасности.
    </p>
  </div>

  <h2 style={{ color: 'var(--color-telegram)', marginTop: '2rem' }}>📋 Что дальше</h2>
  
  <div className="info-box info">
    <p style={{ margin: 0 }}>
      После настройки базовой защиты перейдите к разделу 
      <a href="/platforms/tg-privacy" style={{ color: 'var(--color-telegram)', fontWeight: '600', marginLeft: '0.25rem' }}>
        Приватность и скрытые чаты
      </a>
      для более тонкой настройки конфиденциальности.
    </p>
  </div>

  <div className="info-box success" style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center' }}>
    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
    <h3 style={{ marginBottom: '0.5rem' }}>Отлично!</h3>
    <p style={{ margin: 0 }}>
      Ваш аккаунт в Telegram защищён двухфакторной аутентификацией! 
      Теперь даже при перехвате SMS-кода злоумышленник не сможет войти.
    </p>
  </div>
</div>