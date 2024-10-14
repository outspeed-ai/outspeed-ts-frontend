import { useWebRTC, RealtimeAudio } from './outspeed-react'
import './App.css'

function App() {
    const {
        connect,
        connectionStatus,
        getRemoteAudioTrack,
    } = useWebRTC({
        config: {
            // Add your function URL.
            functionURL: "<my-function-url>",
            audio: true,
            video: true,
        },
    });
    return (
        <div>
            <span>Connection Status: {connectionStatus}</span>
            {connectionStatus === "SetupCompleted" && (
                <button onClick={connect}>Connect</button>
            )}
            {getRemoteAudioTrack() && <RealtimeAudio track={getRemoteAudioTrack()} />}
        </div>
    );
}

export default App
