import {Outlet} from "react-router-dom";
import {Suspense} from "react";

import styles from './root.module.css'
import {useUserSession} from "./queries/use-user-session.ts";
import {Loader} from "../../common/components/loader/Loader.tsx";

export function Root() {
    const {isLoading, isError} = useUserSession()

    let content;

    if (isLoading) {
        content = <Loader />
    } else if (isError) {
        content = <>błąd, spróbuj ponownie później</>
    } else {
        content = <Outlet />
    }

    return (
        <div className={styles.container}>
            <Suspense>
                {content}
            </Suspense>
        </div>
    )
}