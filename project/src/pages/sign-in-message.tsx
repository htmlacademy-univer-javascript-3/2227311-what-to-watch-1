import Footer from '../components/footer';
import HeaderUnsigned from '../components/header-unsigned';

function SignInMessage(): JSX.Element {
  return (
    <body>
      <div className="user-page">
        <HeaderUnsigned/>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__message">
              <p>We can&apos;t recognize this email <br/> and password combination. Please try again.</p>
            </div>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    </body>
  );
}

export default SignInMessage;
