import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://en-marche.fr/formation">Formation</a>
        </li>
        <li>
          <a href="https://aide.en-marche.fr">Aide</a>
        </li>
        <li>
          <a href="https://contact.en-marche.fr">Contact</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://en-marche.fr/mentions-legales">Mentions légales</a>
        </li>
        <li>
          <a href="https://en-marche.fr/politique-cookies">
            Politique des Cookies
          </a>
        </li>
        <li>
          <a href="https://en-marche.fr/politique-protection-donnees">
            Politique de Protection des données
          </a>
        </li>
      </ul>
      <span>© La République En Marche !</span>
    </div>
  );
};

export default Footer;
