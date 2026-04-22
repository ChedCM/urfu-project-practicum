import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const testData = [
  {
    id: 1,
    question: 'Что такое двухфакторная аутентификация (2FA)?',
    options: [
      { text: 'Ввод пароля два раза подряд', correct: false },
      { text: 'Дополнительный код при входе с нового устройства', correct: true },
      { text: 'Программа для запоминания паролей', correct: false },
      { text: 'Проверка почты при регистрации', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Что делать, если вы получили подозрительную ссылку в сообщении?',
    options: [
      { text: 'Перейти по ссылке, чтобы проверить', correct: false },
      { text: 'Отправить ссылку друзьям для проверки', correct: false },
      { text: 'Не переходить, заблокировать отправителя', correct: true },
      { text: 'Скачать файл по ссылке', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Как часто рекомендуется проверять активные сессии?',
    options: [
      { text: 'Раз в год', correct: false },
      { text: 'Раз в месяц', correct: true },
      { text: 'Каждый день', correct: false },
      { text: 'Никогда, это не нужно', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Что такое фишинг?',
    options: [
      { text: 'Вид рыбной ловли', correct: false },
      { text: 'Антивирусная программа', correct: false },
      { text: 'Поддельная страница для кражи паролей', correct: true },
      { text: 'Способ шифрования данных', correct: false },
    ],
  },
  {
    id: 5,
    question: 'Какой пароль самый надёжный?',
    options: [
      { text: 'qwerty123', correct: false },
      { text: 'Имя и год рождения', correct: false },
      { text: '12345678', correct: false },
      { text: 'Случайная комбинация 12+ символов', correct: true },
    ],
  },
  {
    id: 6,
    question: 'Что делать при взломе аккаунта?',
    options: [
      { text: 'Ничего, подождать пока само восстановится', correct: false },
      { text: 'Создать новый аккаунт', correct: false },
      { text: 'Восстановить пароль и завершить все сессии', correct: true },
      { text: 'Удалить приложение', correct: false },
    ],
  },
  {
    id: 7,
    question: 'Зачем нужен менеджер паролей?',
    options: [
      { text: 'Для хранения всех паролей в зашифрованном виде', correct: true },
      { text: 'Для отправки паролей друзьям', correct: false },
      { text: 'Для генерации простых паролей', correct: false },
      { text: 'Менеджер паролей не нужен', correct: false },
    ],
  },
  {
    id: 8,
    question: 'Кто должен видеть ваш номер телефона в профиле?',
    options: [
      { text: 'Все пользователи', correct: false },
      { text: 'Только вы или ваши контакты', correct: true },
      { text: 'Друзья друзей', correct: false },
      { text: 'Это не важно', correct: false },
    ],
  },
];

function getResultData(score, total) {
  const percentage = (score / total) * 100;
  
  if (percentage >= 90) {
    return {
      title: '🎉 Отлично!',
      description: 'Вы отлично разбираетесь в безопасности! Продолжайте в том же духе.',
      color: '#48bb78',
      emoji: '🏆',
    };
  } else if (percentage >= 60) {
    return {
      title: '👍 Хорошо!',
      description: 'У вас хорошие знания, но есть куда расти. Изучите наши инструкции!',
      color: '#ed8936',
      emoji: '📚',
    };
  } else {
    return {
      title: '📖 Нужно подучить',
      description: 'Рекомендуем внимательно изучить все материалы на сайте для вашей безопасности!',
      color: '#f56565',
      emoji: '🔐',
    };
  }
}

export default function InteractiveTest() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (questionId, optionIndex, isCorrect) => {
    if (showResults) return;
    
    setAnswers({
      ...answers,
      [questionId]: { optionIndex, isCorrect },
    });
  };

  const calculateResults = () => {
    let correctCount = 0;
    Object.values(answers).forEach((answer) => {
      if (answer.isCorrect) correctCount++;
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const resetTest = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const answeredQuestions = Object.keys(answers).length;
  const resultData = getResultData(score, testData.length);

  return (
    <div className="test-container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          📝 Тест по безопасности
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#718096' }}>
          Проверьте свои знания о защите аккаунтов в социальных сетях
        </p>
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#eef2ff', borderRadius: '10px', display: 'inline-block' }}>
          <strong>Вопрос {answeredQuestions} из {testData.length}</strong>
        </div>
      </div>

      {!showResults ? (
        <>
          {testData.map((item) => (
            <div key={item.id} className="test-question">
              <h3>
                <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>
                  Вопрос {item.id}:
                </span>
                {item.question}
              </h3>
              <div>
                {item.options.map((option, index) => {
                  const isSelected = answers[item.id]?.optionIndex === index;
                  return (
                    <label
                      key={index}
                      className={`test-option ${isSelected ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name={`question-${item.id}`}
                        checked={isSelected}
                        onChange={() => handleOptionSelect(item.id, index, option.correct)}
                        disabled={showResults}
                      />
                      <span>{option.text}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
            <button
              className="btn btn-primary"
              onClick={calculateResults}
              disabled={answeredQuestions < testData.length}
              style={{
                padding: '1rem 3rem',
                fontSize: '1.2rem',
                opacity: answeredQuestions < testData.length ? 0.6 : 1,
              }}
            >
              {answeredQuestions < testData.length
                ? `Ответьте на все вопросы (${answeredQuestions}/${testData.length})`
                : 'Показать результаты'}
            </button>
          </div>
        </>
      ) : (
        <div className="test-result" style={{ background: resultData.color }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>{resultData.emoji}</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{resultData.title}</h2>
          <div className="test-result-score">
            {score} из {testData.length}
          </div>
          <p style={{ fontSize: '1.3rem', marginTop: '1rem' }}>{resultData.description}</p>
          
          <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.2)', padding: '2rem', borderRadius: '15px' }}>
            <h3 style={{ marginBottom: '1rem' }}>📊 Подробные результаты:</h3>
            <div style={{ display: 'grid', gap: '1rem', textAlign: 'left' }}>
              {testData.map((item, index) => {
                const userAnswer = answers[item.id];
                const isCorrect = userAnswer?.isCorrect;
                return (
                  <div
                    key={item.id}
                    style={{
                      padding: '1rem',
                      background: 'white',
                      borderRadius: '10px',
                      color: '#2d3748',
                    }}
                  >
                    <strong>Вопрос {index + 1}:</strong> {isCorrect ? '✅ Правильно' : '❌ Неправильно'}
                    {!isCorrect && (
                      <div style={{ marginTop: '0.5rem', color: '#48bb78' }}>
                        Правильный ответ: {item.options.find(o => o.correct)?.text}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button className="btn btn-secondary" onClick={resetTest} style={{ marginRight: '1rem' }}>
              Пройти ещё раз
            </button>
            <Link className="btn btn-primary" to="/intro/index">
              К инструкциям
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}