import React from 'react';
import './AboutUsSection.css';

function AboutUsSection() {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <img src="/images/image-about-us.png" alt="Qui sommes-nous ?" />
        <div className="text-content">
          <h1>Qui sommes-nous ?</h1>
          <p>Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent pour créer une expérience unique en son genre.</p>
          <p>Chez Café Neko, nous sommes passionnés par deux choses : le café de qualité et le bien-être des chats. Fondé par des amoureux des félins et des aficionados du café, Café Neko est bien plus qu'un simple café. C'est un refuge pour les amoureux des chats, un havre de paix où l'on peut savourer une bonne tasse de café tout en câlinant nos adorables résidents à quatre pattes.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
