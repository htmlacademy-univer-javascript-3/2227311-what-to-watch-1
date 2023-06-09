import Footer from '../components/footer';
import SmallFilmCard from '../components/small-film-card';

function MyList(): JSX.Element {
  return (
    <body>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            <SmallFilmCard src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald"/>
            <SmallFilmCard src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody"/>
            <SmallFilmCard src="img/macbeth.jpg" alt="Macbeth"/>
            <SmallFilmCard src="img/aviator.jpg" alt="Aviator"/>
            <SmallFilmCard src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin"/>
            <SmallFilmCard src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows"/>
            <SmallFilmCard src="img/revenant.jpg" alt="Revenant"/>
            <SmallFilmCard src="img/johnny-english.jpg" alt="Johnny English"/>
            <SmallFilmCard src="img/shutter-island.jpg" alt="Shutter Island"/>
          </div>
        </section>

        <Footer/>
      </div>
    </body>
  );
}

export default MyList;
