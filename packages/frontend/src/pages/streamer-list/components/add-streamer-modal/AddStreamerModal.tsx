import { Dispatch, SetStateAction } from 'react'

import styles from './add-streamer-modal.module.css'
import { Form } from './components/form/Form.tsx'

interface Props {
  modal: boolean
  setModal: Dispatch<SetStateAction<boolean>>
  refetch: () => void
}

export function AddStreamerModal({ setModal, modal, refetch }: Props) {
  if (!modal) return null

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Form setModal={setModal} refetch={refetch} />
      </div>
    </div>
  )
}
