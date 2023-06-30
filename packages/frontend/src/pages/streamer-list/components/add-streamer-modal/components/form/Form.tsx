import {Dispatch, SetStateAction} from "react";
import {IconX} from "@tabler/icons-react";

import {useAddStreamerForm} from "./hooks/use-add-streamer-form.tsx";
import {FormSchema} from "./models/form-schema.ts";
import styles from './form.module.css'
import {Input} from "../../../../../../common/components/input/Input.tsx";
import {Select} from "../../../../../../common/components/select/Select.tsx";
import {TextArea} from "../../../../../../common/components/text-area/TextArea.tsx";

interface Props {
    setModal: Dispatch<SetStateAction<boolean>>
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

export function Form({setModal}: Props) {
    const {register, handleSubmit, errors, control} = useAddStreamerForm()

    function onSubmit(formData: FormSchema) {
        console.log(formData)
    }

    function exit() {
        setModal(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.header}>
                <p>Dodaj streamera</p>
                <div className={styles.exit} onClick={exit}>
                    <IconX size={36}/>
                </div>
            </div>

            <Input
                id="name"
                label="Name"
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

            <button type="submit" className={styles.button}>
                Dodaj
            </button>
        </form>
    )
}