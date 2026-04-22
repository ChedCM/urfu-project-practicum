---
sidebar_position: 1
title: Словарь терминов
description: Объяснение терминов по безопасности
---

<div className="content-card">
  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
    <div style={{ 
      width: '100px', 
      height: '100px', 
      background: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      margin: '0 auto 1rem'
    }}>
      📖
    </div>
    <h1 style={{ color: '#ed8936', marginBottom: '0.5rem' }}>Словарь терминов</h1>
    <p style={{ color: '#718096', fontSize: '1.1rem' }}>Простые объяснения сложных понятий</p>
  </div>

  <div className="info-box info">
    <strong>💡 Зачем нужен словарь?</strong>
    <p style={{ margin: '0.5rem 0 0' }}>
      Мы объясняем все технические термины простым языком, чтобы вы могли 
      легко понять и применить рекомендации по безопасности.
    </p>
  </div>

  <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
    <div className="step-card" style={{ background: '#eef2ff' }}>
      <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>🔐</span> 2FA (двухфакторная аутентификация)
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Метод защиты, при котором для входа требуется не только пароль, но и дополнительный код. 
        Код может приходить по SMS, генерироваться в приложении или быть отпечатком пальца.
      </p>
    </div>

    <div className="step-card" style={{ background: '#f0fff4' }}>
      <h3 style={{ color: '#48bb78', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>📱</span> Активная сессия
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Подключение вашего аккаунта к устройству или браузеру. 
        Через активную сессию можно пользоваться аккаунтом без повторного ввода пароля.
      </p>
    </div>

    <div className="step-card" style={{ background: '#fffaf0' }}>
      <h3 style={{ color: '#ed8936', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>🛡️</span> Безопасный режим
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Комплексная настройка в мессенджере MAX, которая одной кнопкой включает защиту 
        от спама, нежелательных звонков и скрывает профиль из поиска.
      </p>
    </div>

    <div className="step-card" style={{ background: '#faf5ff' }}>
      <h3 style={{ color: 'var(--color-max)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>👆</span> Биометрия
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Вход по отпечатку пальца, сканированию лица (Face ID) или радужной оболочке глаза. 
        Используется для быстрого и безопасного доступа.
      </p>
    </div>

    <div className="step-card" style={{ background: '#fff5f5' }}>
      <h3 style={{ color: '#f56565', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>🔓</span> Брутфорс (подбор пароля)
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Метод взлома, при котором злоумышленник перебирает все возможные комбинации паролей, 
        пока не найдёт правильный. Защищайтесь длинными сложными паролями!
      </p>
    </div>

    <div className="step-card" style={{ background: '#e6fffa' }}>
      <h3 style={{ color: '#38b2ac', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>🔑</span> Ключи восстановления
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Одноразовые коды, которые выдаются при включении двухфакторной аутентификации. 
        С их помощью можно восстановить доступ к аккаунту, если потерян телефон.
      </p>
    </div>

    <div className="step-card" style={{ background: '#ebf8ff' }}>
      <h3 style={{ color: 'var(--color-vk)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>🔒</span> Менеджер паролей
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Программа, которая хранит все ваши пароли в зашифрованном виде, помогает генерировать 
        надёжные пароли и автоматически подставлять их при входе на сайты.
      </p>
    </div>

    <div className="step-card" style={{ background: '#f7fafc' }}>
      <h3 style={{ color: '#718096', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>☁️</span> Облачный пароль
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Название двухфакторной аутентификации в Telegram. Требуется для входа с нового устройства 
        в дополнение к SMS-коду.
      </p>
    </div>

    <div className="step-card" style={{ background: '#fffff0' }}>
      <h3 style={{ color: '#d69e2e', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>⏰</span> Сессия
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Период времени, в течение которого вы остаётесь залогинены в аккаунте на конкретном устройстве.
      </p>
    </div>

    <div className="step-card" style={{ background: '#eef2ff' }}>
      <h3 style={{ color: 'var(--color-telegram)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>💬</span> Скрытый чат
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Режим общения в Telegram с сквозным шифрованием. Такие чаты не синхронизируются между устройствами 
        и могут быть защищены отдельным паролем.
      </p>
    </div>

    <div className="step-card" style={{ background: '#fff5f7' }}>
      <h3 style={{ color: '#d53f8c', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>🎭</span> Социальная инженерия
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Метод обмана, при котором злоумышленник не взламывает технически, а выманивает пароль или код 
        у самого пользователя (например, звонком «из поддержки»).
      </p>
    </div>

    <div className="step-card" style={{ background: '#fff5f5' }}>
      <h3 style={{ color: '#e53e3e', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>🎣</span> Фишинг
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Поддельная страница входа, созданная для кражи логина и пароля. 
        Выглядит как настоящий сайт, но данные уходят мошенникам.
      </p>
    </div>

    <div className="step-card" style={{ background: '#fefcbf' }}>
      <h3 style={{ color: '#b7791f', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>💸</span> Фрод
      </h3>
      <p style={{ margin: 0, color: '#4a5568' }}>
        Мошенничество, незаконные действия с использованием чужих учётных данных.
      </p>
    </div>
  </div>
</div>