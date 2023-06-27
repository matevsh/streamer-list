import {useQuery} from "@tanstack/react-query";

import {streamersSchema} from "../models/streamers-schema.ts";
import {fetcher} from "../../../common/utils/fetcher.ts";
import {API_URL} from "../../../common/constants/env.ts";

export function useGetStreamers() {
    return useQuery({
        queryKey: ["streamers"],
        queryFn: () => fetcher(`${API_URL}/streamer`, streamersSchema)
    })
}