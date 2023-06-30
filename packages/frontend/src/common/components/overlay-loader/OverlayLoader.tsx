import styles from './overlay-loader.module.css'
import {Loader} from "../loader/Loader.tsx";

interface Props {
    visible: boolean
}

export function OverlayLoader({visible}: Props) {
    if(!visible) return null

    return (
        <div className={styles.background}>
            <Loader />
        </div>
    )
}