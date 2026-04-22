import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '../css/custom.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className="hero-section">
      <div className="container">
        <h1 className="hero-title">{siteConfig.title}</h1>
        <p className="hero-subtitle">
          Практические рекомендации по безопасности учётных записей 
          в социальных сетях и мессенджерах
        </p>
        <div className="hero-buttons">
          <Link className="btn btn-primary" to="/platforms/tg-basic">
            Начать обучение
          </Link>
          <Link className="btn btn-secondary" to="/interactive/test">
            Пройти тест
          </Link>
        </div>
      </div>
    </header>
  );
}

function PlatformCard({ platform, icon, title, description, link, color }) {
  return (
    <div className={`platform-card ${platform}`}>
      <div className="platform-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="btn btn-primary" to={link}>
        Перейти к инструкции
      </Link>
    </div>
  );
}

function HomepagePlatforms() {
  return (
    <section className="platform-cards">
      <PlatformCard
        platform="telegram"
        icon="✈️"
        title="Telegram"
        description="Настройка двухфакторной аутентификации, приватности и скрытых чатов"
        link="/platforms/tg-basic"
      />
      <PlatformCard
        platform="vk"
        icon="📱"
        title="ВКонтакте"
        description="Защита аккаунта, настройка приватности и проверка активных сессий"
        link="/platforms/vk-login"
      />
      <PlatformCard
        platform="max"
        icon="🔒"
        title="MAX"
        description="Двухфакторная аутентификация и безопасный режим в российском мессенджере"
        link="/platforms/max-2fa"
      />
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className="feature-section">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          Что вы найдёте на сайте
        </h2>
        <div className="feature-grid">
          <FeatureCard
            icon="📚"
            title="Пошаговые инструкции"
            description="Подробные руководства по настройке безопасности для каждой платформы"
          />
          <FeatureCard
            icon="🎯"
            title="Интерактивный чек-лист"
            description="Проверьте уровень защиты своих аккаунтов за 5 минут"
          />
          <FeatureCard
            icon="📝"
            title="Тест знаний"
            description="Проверьте, насколько хорошо вы разбираетесь в кибербезопасности"
          />
          <FeatureCard
            icon=""
            title="Словарь терминов"
            description="Простые объяснения сложных понятий из области безопасности"
          />
          <FeatureCard
            icon="🚨"
            title="Что делать при взломе"
            description="Пошаговый план действий в случае компрометации аккаунта"
          />
          <FeatureCard
            icon="💡"
            title="Практические советы"
            description="Рекомендации, которые действительно работают и легко применить"
          />
        </div>
      </div>
    </section>
  );
}

function HomepageWhyImportant() {
  return (
    <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
        Почему это важно?
      </h2>
      <div className="content-card">
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Каждый день миллионы пользователей социальных сетей становятся жертвами 
          киберпреступников. Взлом аккаунта может привести к:
        </p>
        <div className="info-box warning">
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Краже личных данных и переписки</li>
            <li>Рассылке спама от вашего имени</li>
            <li>Мошенничеству с вашими контактами</li>
            <li>Потере доступа к важным сервисам</li>
            <li>Финансовым потерям</li>
          </ul>
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <strong>Хорошая новость:</strong> большинство взломов можно предотвратить, 
          следуя простым рекомендациям по безопасности!
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title="Главная"
      description="Практические рекомендации по безопасности аккаунтов в социальных сетях">
      <HomepageHeader />
      <main>
        <HomepagePlatforms />
        <HomepageWhyImportant />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}