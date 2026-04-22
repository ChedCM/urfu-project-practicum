import React, { useState } from 'react';

const checklistItems = [
  { id: 1, text: 'Включена двухфакторная аутентификация (2FA) на всех аккаунтах', points: 3 },
  { id: 2, text: 'Используются уникальные пароли для каждого сервиса', points: 2 },
  { id: 3, text: 'Регулярно проверяю список активных сессий (раз в месяц)', points: 2 },
  { id: 4, text: 'Номер телефона в профиле скрыт от всех (или виден только контактам)', points: 2 },
  { id: 5, text: 'Никогда не перехожу по подозрительным ссылкам', points: 1 },
  { id: 6, text: 'Использую менеджер паролей (LastPass, 1Password, Bitwarden)', points: 1 },
];

export default function InteractiveChecklist() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculateScore = () => {
    return checklistItems.reduce((total, item) => {
      return checkedItems[item.id] ? total + item.points : total;
    }, 0);
  };

  const totalScore = calculateScore();
  const maxScore = checklistItems.reduce((sum, item) => sum + item.points, 0);
  const percentage = Math.round((totalScore / maxScore) * 100);

  let resultColor = '#f56565'; // Красный
  let resultEmoji = '🔴';
  let resultText = 'Низкий уровень защиты. Срочно выполните рекомендации!';

  if (percentage >= 50) {
    resultColor = '#ed8936'; // Оранжевый
    resultEmoji = '🟡';
    resultText = 'Средний уровень защиты. Есть куда улучшать.';
  }
  if (percentage >= 80) {
    resultColor = '#48bb78'; // Зеленый
    resultEmoji = '🟢';
    resultText = 'Отличный уровень защиты! Вы молодец!';
  }

  return (
    <div className="content-card">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          margin: '0 auto 1rem'
        }}>
          ✅
        </div>
        <h1 style={{ color: '#48bb78', marginBottom: '0.5rem' }}>Чек-лист безопасности</h1>
        <p style={{ color: '#718096', fontSize: '1.1rem' }}>Отмечайте выполненные пункты, чтобы оценить защиту</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1rem', 
        marginBottom: '2rem' 
      }}>
        {checklistItems.map((item) => (
          <label 
            key={item.id} 
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '1rem', 
              padding: '1.5rem', 
              background: checkedItems[item.id] ? '#f0fff4' : '#f7fafc',
              border: checkedItems[item.id] ? '2px solid #48bb78' : '2px solid transparent',
              borderRadius: '12px', 
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <input 
              type="checkbox" 
              checked={!!checkedItems[item.id]} 
              onChange={() => toggleItem(item.id)}
              style={{ marginTop: '0.25rem', width: '24px', height: '24px', cursor: 'pointer', accentColor: '#48bb78' }}
            />
            <div>
              <div style={{ fontWeight: '600', color: '#2d3748', marginBottom: '0.25rem' }}>{item.text}</div>
              <div style={{ fontSize: '0.85rem', color: '#718096' }}>+{item.points} балла</div>
            </div>
          </label>
        ))}
      </div>

      <div style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        background: resultColor, 
        color: 'white', 
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{resultEmoji}</div>
        <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>{totalScore} / {maxScore}</h2>
        <p style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{resultText}</p>
        
        {/* Progress Bar */}
        <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.3)', borderRadius: '5px', marginTop: '1.5rem', overflow: 'hidden' }}>
          <div style={{ width: `${percentage}%`, height: '100%', background: 'white', borderRadius: '5px', transition: 'width 0.5s ease' }}></div>
        </div>
      </div>
    </div>
  );
}