import { ChatTeardropDots } from "phosphor-react"
import "./widget.css"

export function Widget(){
    return (
    <div className="widgetDiv">
        <button className="widgetButton group">   
            <ChatTeardropDots className="chatIcon"/>
            <span className="widgetText">
                <span className="pl-2">Feedback</span>
            </span>
        </button>
    </div>
    )
}