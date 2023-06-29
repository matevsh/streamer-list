import {useQuery} from "@tanstack/react-query";

import {fetcher} from "../../../common/utils/fetcher.ts";
import {API_URL} from "../../../common/constants/env.ts";
import {userSessionSchema} from "../models/user-session.ts";

export function useUserSession() {
    return useQuery({
        queryKey: ['session'],
        queryFn: () => fetcher(`${API_URL}/user`, userSessionSchema),
        refetchOnWindowFocus: false
    })
}