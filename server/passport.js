const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "147557196061-5qnujc3pv00otdt581jchscf1rf9qf37.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});