import {Dispatch, SetStateAction} from "react";
import {IconX} from "@tabler/icons-react";
import {Navigate} from 'react-router-dom'

import {useAddStreamerForm} from "./hooks/use-add-streamer-form.tsx";
import {FormSchema} from "./models/form-schema.ts";
import styles from './form.module.css'
import {Input} from "../../../../../../common/components/input/Input.tsx";
import {Select} from "../../../../../../common/components/select/Select.tsx";
import {TextArea} from "../../../../../../common/components/text-area/TextArea.tsx";
import {useAddStreamer} from "./mutations/use-add-streamer.ts";
import {OverlayLoader} from "../../../../../../common/components/overlay-loader/OverlayLoader.tsx";

interface Props {
    setModal: Dispatch<SetStateAction<boolean>>
    refetch: () => void
}

const SELECT_DATA = [
    {
        label: "Twitch",
        value: "twitch"
    },
    {
        label: "Youtube",
        value: "youtube"
    },
    {
        label: "Kick",
        value: "kick"
    },
    {
        label: "Tiktok",
        value: "tiktok"
    },
    {
        label: "Rumble",
        value: "rumble"
    },
]

export function Form({setModal, refetch}: Props) {
    const {register, handleSubmit, errors, control} = useAddStreamerForm()
    const {mutate, isLoading, data, isSuccess} = useAddStreamer({refetch, setModal})

    function onSubmit(formData: FormSchema) {
        mutate(formData)
    }

    function exit() {
        setModal(false)
    }

    if(isSuccess) {
        return <Navigate to={`/details/${data.data.streamerId}`} />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <OverlayLoader visible={isLoading} />

            <div className={styles.header}>
                <p>Dodaj streamera</p>
                <div className={styles.exit} onClick={exit}>
                    <IconX size={36}/>
                </div>
            </div>

            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                error={errors.name?.message}
                {...register("name")}
            />

            <Select
                id="platform"
                error={errors.platform?.message}
                data={SELECT_DATA}
                control={control}
                label="Platform"
            />

            <TextArea
                id="description"
                error={errors.description?.message}
                label="Description"
                {...register("description")}
            />

            <button
                type="submit"
                className={styles.button}
            >
                Dodaj
            </button>
        </form>
    )
}