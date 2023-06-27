import {useGetStreamers} from "./queries/use-get-streamers.ts";

export function StreamerList() {
    const {data} = useGetStreamers()

    return (
        <div>
            <h1>Streamer List</h1>
            {data && data.data.map((item, idx) => <h1 key={idx}>{item.name}</h1>)}
        </div>
    )
}