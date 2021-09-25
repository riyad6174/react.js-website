import React from "react";
import classes from "./footer.module.css";
import footerlogo from '../../assets/footerlogo.png'
export default function Footer() {
  return (
    <div className={classes.footers}>
      {/* copyright image section start from here  */}
      <div className={classes.copyright}>
        <img src={footerlogo} alt="facebook open source" />
        <p>copyright hashC 2021 facebook inc.</p>
      </div>
      {/* copyright image section ends here  */}

      {/* footer all link section start from here */}
      <div className={classes.footerlink}>
        <div className={classes.docs}>
          <div>
            <p className={classes.footertitle}>DOCS</p>
            <a href="##">installation</a>
            <a href="##">main concepts</a>
            <a href="##">advanced guides</a>
            <a href="##">API Reference</a>
            <a href="##">hooks</a>
            <a href="##">testing</a>
            <a href="##">contributing</a>
            <a href="##">FAQ</a>
          </div>
          <div className={classes.docsTwo}>
            <p className={classes.footertitle}>COMMUNITY</p>
            <a href="##">Code of Conduct</a>
            <a href="##">Commmunity Resourecs</a>
          </div>
        </div>
        <div className={classes.channels}>
          <div>
            <p className={classes.footertitle}>CHANNELS</p>
            <a href="##">Github</a>
            <a href="##">Stack Overflow</a>
            <a href="##">Discussion Forums</a>
            <a href="##">Reactiflux Chat</a>
            <a href="##">DEV Community</a>
            <a href="##">Facebook</a>
            <a href="##">Twitter</a>
          </div>
          <div className={classes.channelsTwo}>
            <p className={classes.footertitle}>MORE</p>
            <a href="##">Tutorial</a>
            <a href="##">blog</a>
            <a href="##">Acknowledgements</a>
            <a href="##">React Native</a>
            <a href="##">Privacy</a>
            <a href="##">Terms</a>
          </div>
        </div>
      </div>
      {/* footer all link section start from here */}
    </div>
  );
}
