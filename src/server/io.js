const DEFAULT_ROOM = "0"
export default function listenWebSocket(io, store) {
    io.on("connection",socket=>{
        console.log("one client connected")

        socket.emit("state",store.getState())

        socket.on("disconnect",()=>{
            console.log("user disconnected")
        })
    })
}