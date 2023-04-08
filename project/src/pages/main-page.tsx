import BigFilmCard from '../components/big-film-card';
import Footer from '../components/footer';
import SmallFilmCard from '../components/small-film-card';


function MainPage(): JSX.Element {
  return (
    <body>
      <BigFilmCard bg="img/bg-the-grand-budapest-hotel.jpg" poster="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" genre="Drama" year="2014"/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <SmallFilmCard src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald"/>
            <SmallFilmCard src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody"/>
            <SmallFilmCard src="img/macbeth.jpg" alt="Macbeth"/>
            <SmallFilmCard src="img/aviator.jpg" alt="Aviator"/>
            <SmallFilmCard src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin"/>
            <SmallFilmCard src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows"/>
            <SmallFilmCard src="img/johnny-english.jpg" alt="Johnny English"/>
            <SmallFilmCard src="img/revenant.jpg" alt="Revenant"/>
            <SmallFilmCard src="img/shutter-island.jpg" alt="Shutter Island"/>
            <SmallFilmCard src="img/pulp-fiction.jpg" alt="Pulp Fiction"/>
            <SmallFilmCard src="img/no-country-for-old-men.jpg" alt="No Country for Old Men"/>
            <SmallFilmCard src="img/snatch.jpg" alt="Snatch"/>
            <SmallFilmCard src="img/moonrise-kingdom.jpg" alt="Moonrise Kingdom"/>
            <SmallFilmCard src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet"/>
            <SmallFilmCard src="img/midnight-special.jpg" alt="Midnight Special"/>
            <SmallFilmCard src="img/war-of-the-worlds.jpg" alt="War of the Worlds"/>
            <SmallFilmCard src="img/dardjeeling-limited.jpg" alt="Dardjeeling Limited"/>
            <SmallFilmCard src="img/orlando.jpg" alt="Orlando"/>
            <SmallFilmCard src="img/mindhunter.jpg" alt="Mindhunter"/>
            <SmallFilmCard src="img/midnight-special.jpg" alt="Midnight Special"/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </body>
  );
}

export default MainPage;
