import {Outlet} from "react-router-dom";

import styles from './root.module.css'

export function Root() {
    return (
        <div className={styles.container}>
            <Outlet />
        </div>
    )
}