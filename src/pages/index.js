import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import calendar from '../assets/images/calendar.png';
import skilvioo from '../assets/images/skilvioo.jpeg';
import meetsumup from '../assets/images/meetsumup.png';
import bgain from '../assets/images/bgain.png';
import garriguettes from '../assets/images/garriguettes.png'


import pic7 from '../assets/images/pic07.jpg';
import therabiobank from '../assets/images/therabiobank.png';

import pic8 from '../assets/images/light-bulb-4514505_1920.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portofolio', icon: 'fa-th' },
  { id: 'skills', name: 'Compétences', icon: 'fa-cog' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt strong">
              Bienvenue sur le site de <strong>FANT'HOME </strong>
              <br />
              Développement Web
            </h2>
            <p class="strong"> Sites Web et applications </p>
            <p class="strong">Vous pouvez consulter les différents projets déjà réalisés</p>

          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Voir le portfolio
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
           Retrouvez ici les différentes créations réalisées par FANT'HOME
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={calendar} alt="" />
                </a>
                <header>
                  <h3> Module vaccination logiciel santé</h3>
                  <p> Mise en place d'un calendrier vaccinal automatisé sur un logiciel de gestion patientèle</p>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={skilvioo} alt="" />
                </a>
                <header>
                  <h3>Application évaluation de compétences</h3>
                  <p> Outils d'évaluation de compétences et de matching métiers et formations</p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="http://meetsumup.fr" className="image fit">
                  <img src={meetsumup} alt="" />
                </a>
                <header>
                  <h3>Application de descriptions MeetSumUp</h3>
                  <p> Trouver la description idéale pour des sites de rencontre </p>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={garriguettes} alt="" />
                </a>
                <header>
                  <h3>Site course à pied Les Garriguettes</h3>
                  <p> Résultats et annonces pour l'association les Garriguettes</p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={therabiobank} alt="" />
                </a>
                <header>
                  <h3>Application de gestion des stocks - Biobanking </h3>
                  <p> Gestion des échantillons biologiques par une interface web intuitive</p>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={bgain} alt="" />
                </a>
                <header>
                  <h3>Application de prix de marché BGain - En création </h3>
                  <p> Connaitre le juste prix des objets typiques de chaque pays</p>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="three">
        <div className="container">
          <header>
            <h2>Compétences</h2>
          </header>

          <a href="/#" className="image featured">
            <img class="pic8" src={pic8} alt="" />
          </a>

          <p>
            Développement autour de plusieurs technologies :
          </p>
          <ul class="languages">
            <strong> Langages :</strong>
            <li> JavaScript / TypeScript / PHP </li>
            <li> C# / .NET / .NET Core </li>
            <li> SQL / FireBird / Neo4j / MongoDB</li>
          </ul>

          <ul class="frameworks">
            <strong> Frameworks utilisés :</strong>
            <li> Angular 5+/ Ionic / React / Gatsby </li>
            <li> Symfony / CakePHP </li>
            <li> Material Design / Bootstrap / Clarity </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
           Pour toutes questions ou demande de devis :
          </p>

          {/* <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact"> */}
            <form method="post" action="https://getform.io/f/243e8dea-7ff8-4767-9b10-082066fa3bf1">
            {/* <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" /> */}
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Nom" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Envoyer" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
