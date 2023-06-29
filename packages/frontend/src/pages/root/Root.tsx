import {Outlet} from "react-router-dom";

import styles from './root.module.css'
import {useUserSession} from "./queries/use-user-session.ts";

export function Root() {
    const {isLoading, isError} = useUserSession()

    if (isLoading) {
        return <>ładowanie</>
    }

    if (isError) {
        return <>błąd, spróbuj ponownie później</>
    }

    return (
        <div className={styles.container}>
            <Outlet />
        </div>
    )
}