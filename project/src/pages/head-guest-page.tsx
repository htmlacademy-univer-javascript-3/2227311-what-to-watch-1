import HeaderUnsigned from '../components/header-unsigned';

function HeadGuestPage(): JSX.Element {
  return (
    <body>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          <img src="img/bg-header.jpg" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderUnsigned/>

      </section>
    </body>);
}

export default HeadGuestPage;
