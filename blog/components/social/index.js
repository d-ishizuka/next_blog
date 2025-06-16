import styles from "@/components/social/styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebookF,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Social({ iconSize = 'initial'}) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 'var(--icon-size, 24px)' }}/>
                    <span className="sr-only">Twitter</span>
                </a>
            </li>
            <li>
                <a href="https://facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: 'var(--icon-size, 24px)' }}/>
                    <span className="sr-only">Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub}style={{ fontSize: 'var(--icon-size, 24px)' }}/>
                    <span className="sr-only">GitHub</span>
                </a>
            </li>
        </ul>
    )
}