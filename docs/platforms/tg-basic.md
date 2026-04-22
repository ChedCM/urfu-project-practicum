---
sidebar_position: 1
title: Telegram — базовая защита
description: Как защитить аккаунт в Telegram
---

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
      ✈️
    </div>
    <h1 style={{ color: 'var(--color-telegram)', marginBottom: '0.5rem' }}>Telegram</h1>
    <p style={{ color: '#718096', fontSize: '1.1rem' }}>Базовая защита аккаунта</p>
  </div>

  <div className="info-box info">
    <strong>💡 Зачем это нужно?</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Двухфакторная аутентификация защитит ваш аккаунт даже если злоумышленники 
      узнают ваш пароль от SMS.
    </p>
  </div>

  <h2 style={{ color: 'var(--color-telegram)', marginTop: '2rem' }}>🔐 Включение двухфакторной аутентификации</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте настройки</strong>
    <p>Нажмите на три полоски (меню) → <strong>Настройки</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Перейдите в раздел конфиденциальности</strong>
    <p>Выберите <strong>Конфиденциальность</strong> → <strong>Облачный пароль</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Включите двухэтапную аутентификацию</strong>
    <p>Нажмите <strong>Включить двухэтапную аутентификацию</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">4</span>Придумайте пароль</strong>
    <p>Пароль должен содержать минимум 6 символов. Используйте буквы и цифры!</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">5</span>Добавьте подсказку и email</strong>
    <p>Это поможет восстановить доступ, если забудете пароль</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">6</span>Сохраните резервные коды</strong>
    <p>Обязательно сохраните резервные коды в надёжном месте!</p>
  </div>

  <div className="info-box warning">
    <strong>⚠️ Важно!</strong>
    <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.5rem' }}>
      <li>Не используйте пароль от других сервисов</li>
      <li>Сохраните резервные коды в безопасном месте</li>
      <li>Добавьте email для восстановления</li>
    </ul>
  </div>

  <h2 style={{ color: 'var(--color-telegram)', marginTop: '2rem' }}>📱 Проверка активных сессий</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Устройства</strong>
    <p>Настройки → <strong>Устройства</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Проверьте список</strong>
    <p>Посмотрите все активные сессии. Если видите незнакомые устройства — завершите их!</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Завершите подозрительные сессии</strong>
    <p>Нажмите на устройство → <strong>Завершить</strong></p>
  </div>

  <div className="info-box success">
    <strong>✅ Готово!</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Теперь ваш аккаунт в Telegram защищён двухфакторной аутентификацией!
    </p>
  </div>
</div>