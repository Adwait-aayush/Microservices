import Sent from "./Sent"
import Recieved from "./Recieved"

export default function Main(){
    return(
        <>
        <div className="flex flex-row flex-grow justify-center align-center">
            <Sent/>
            <Recieved/>

        </div>
        </>
    )
}