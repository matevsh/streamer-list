import {useMutation} from "@tanstack/react-query";
import {mutator} from "../utils/mutator.tsx";
import {API_URL} from "../constants/env.ts";
import {resultSchema} from "../models/mutation-response.ts";

interface voteBody {
    streamerId: number,
    positive: boolean
}

export function usePutVote(refetch?: () => void) {
    return useMutation({
        mutationKey: ['vote'],
        mutationFn: (body: voteBody) => mutator(`${API_URL}/streamer`, body ,resultSchema, "PUT"),
        onSuccess: () => {
            if(refetch) refetch()
        }
    })
}