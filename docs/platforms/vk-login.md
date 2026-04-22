---
sidebar_position: 1
title: VK — вход и базовая защита
description: Как защитить аккаунт ВКонтакте
---

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
      📱
    </div>
    <h1 style={{ color: 'var(--color-vk)', marginBottom: '0.5rem' }}>ВКонтакте</h1>
    <p style={{ color: '#718096', fontSize: '1.1rem' }}>Вход и базовая защита аккаунта</p>
  </div>

  <div className="info-box info">
    <strong>💡 Зачем это нужно?</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Двухфакторная аутентификация защитит вашу страницу от взлома. 
      Даже если кто-то узнает ваш пароль, без кода из SMS войти не получится!
    </p>
  </div>

  <h2 style={{ color: 'var(--color-vk)', marginTop: '2rem' }}>🔐 Включение двухфакторной аутентификации</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Настройки</strong>
    <p>Нажмите на свою аватарку в верхнем правом углу → <strong>Настройки</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Перейдите в раздел Безопасность</strong>
    <p>В меню слева выберите <strong>Безопасность</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Включите Подтверждение входа</strong>
    <p>Нажмите <strong>Подтверждение входа</strong> → <strong>Подключить</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">4</span>Подтвердите номер телефона</strong>
    <p>Введите код из SMS, который придёт на ваш номер</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">5</span>Выберите способ получения кодов</strong>
    <p>Рекомендуем: <strong>Приложение для двухфакторной аутентификации</strong> (Google Authenticator, Microsoft Authenticator)</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">6</span>Сохраните резервные коды</strong>
    <p>Скачайте или запишите резервные коды — они пригодятся, если потеряете доступ к телефону!</p>
  </div>

  <div className="info-box warning">
    <strong>⚠️ Важно!</strong>
    <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.5rem' }}>
      <li>Не сообщайте коды из SMS никому, даже «поддержке ВКонтакте»</li>
      <li>Сохраните резервные коды в надёжном месте</li>
      <li>Используйте приложение-аутентификатор — это безопаснее SMS</li>
    </ul>
  </div>

  <h2 style={{ color: 'var(--color-vk)', marginTop: '2rem' }}>👀 Проверка активных сессий</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте Безопасность</strong>
    <p>Настройки → <strong>Безопасность</strong> → <strong>Показать историю активности</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Проверьте список устройств</strong>
    <p>Вы увидите все устройства, с которых заходили в аккаунт: браузер, город, время последнего посещения</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Завершите подозрительные сессии</strong>
    <p>Если видите незнакомое устройство → нажмите <strong>Завершить все сессии</strong></p>
  </div>

  <div className="info-box success">
    <strong>✅ Готово!</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Теперь вы контролируете все активные сессии. При подозрении на взлом 
      сразу завершайте все сессии и меняйте пароль!
    </p>
  </div>

  <h2 style={{ color: 'var(--color-vk)', marginTop: '2rem' }}>🔑 Смена пароля</h2>
  
  <div className="step-card">
    <strong><span className="step-number">1</span>Откройте раздел Безопасность</strong>
    <p>Настройки → <strong>Безопасность</strong> → <strong>Пароль</strong></p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">2</span>Введите текущий пароль</strong>
    <p>Введите ваш текущий пароль от ВКонтакте</p>
  </div>

  <div className="step-card">
    <strong><span className="step-number">3</span>Придумайте новый надёжный пароль</strong>
    <p>Пароль должен содержать:</p>
    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
      <li>Минимум 8 символов</li>
      <li>Заглавные и строчные буквы</li>
      <li>Цифры</li>
      <li>Спецсимволы (!@#$%^&*)</li>
    </ul>
  </div>

  <div className="step-card">
    <strong><span className="step-number">4</span>Подтвердите новый пароль</strong>
    <p>Введите новый пароль ещё раз для подтверждения</p>
  </div>

  <div className="info-box warning">
    <strong>⚠️ Правила надёжного пароля:</strong>
    <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.5rem' }}>
      <li>Не используйте один и тот же пароль на разных сайтах!</li>
      <li>Не используйте личные данные (имя, дату рождения, имя питомца)</li>
      <li>Используйте менеджер паролей (LastPass, 1Password, Bitwarden)</li>
    </ul>
  </div>

  <div className="info-box success" style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center' }}>
    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
    <h3 style={{ marginBottom: '0.5rem' }}>Отличная работа!</h3>
    <p style={{ margin: 0 }}>
      Ваш аккаунт ВКонтакте теперь защищён двухфакторной аутентификацией 
      и надёжным паролем!
    </p>
  </div>
</div>