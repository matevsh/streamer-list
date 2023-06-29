import {Outlet} from "react-router-dom";
import {Suspense} from "react";

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
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    )
}