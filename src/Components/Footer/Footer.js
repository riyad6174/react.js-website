import React from 'react'
import classes from './footer.module.css'
export default function Footer() {
    return (
        <>
            {/* copyright image section start from here  */}
            <div className={classes.copyright}>
                <img src="" alt="facebook open source" />
                <p>copyright hashC 2021 facebook inc.</p>
            </div>
            {/* copyright image section ends here  */}   

            {/* footer all link section start from here */}
            <div className={classes.footerLink}>
                <div className={classes.docs}>
                    <p>DOCS</p>
                    <a href="##">installation</a>
                    <a href="##">main concepts</a>
                    <a href="##">advanced guides</a>
                    <a href="##">API Reference</a>
                    <a href="##">hooks</a>
                    <a href="##">testing</a>
                    <a href="##">contributing</a>
                    <a href="##">FAQ</a>
                </div>
                <div className={classes.channels}>
                <p>CHANNELS</p>
                <a href="##">Github</a>
                <a href="##">Stack Overflow</a>
                <a href="##">Discussion Forums</a>
                <a href="##">Reactiflux Chat</a>
                <a href="##">DEV Community</a>
                <a href="##">Facebook</a>
                <a href="##">Twitter</a>
                </div>
            </div>
            {/* footer all link section start from here */}

        </>
    )
}
