import {useMutation} from "@tanstack/react-query";
import {Dispatch, SetStateAction} from "react";

import {mutator} from "../../../../../../../common/utils/mutator.tsx";
import {addStreamerResponse} from '../models/add-streamer-response.ts'
import {API_URL} from "../../../../../../../common/constants/env.ts";
import {FormSchema} from "../models/form-schema.ts";

interface Props {
    refetch: () => void
    setModal: Dispatch<SetStateAction<boolean>>
}

export function useAddStreamer({refetch, setModal}: Props) {
    return useMutation({
        mutationKey: ["add-streamer"],
        mutationFn: (body: FormSchema) => mutator(`${API_URL}/streamer`, body, addStreamerResponse),
        onSuccess: () => {
            refetch();
        }
    })
}