import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../loading/loading";

interface ScreenshotButtonType{
    onScreenshotTook: (screenshot:string|null) => void,
    screenshot: string|null
}

export function ScreenshotButton({onScreenshotTook, screenshot}:ScreenshotButtonType){
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)
        const canvas =  await html2canvas(document.querySelector("html")!)
        const base64Image = canvas.toDataURL("image/png")
        console.log(base64Image)
        onScreenshotTook(base64Image)
        setIsTakingScreenshot(false)
    }

    if(screenshot) return(
        <button 
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-text-secondary hover:text-text-primary transition-colors"
        style={{
            backgroundImage: `url(${screenshot})`,
            backgroundPosition: "right bottom",
            backgroundSize: 180,
        }}
        onClick={() => onScreenshotTook(null)}
        >
            <Trash weight="fill" />

        </button>
    )

    return (
    <button
        type="button"
        className="p-2 bg-surface-secondary rounded-[4px] text-text-primary hover:text-text-secondary border-transparent hover:bg-surface-secondary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary focus:ring-brand-500"
        onClick={handleTakeScreenshot}
        >
        {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 " />}
    </button>
    )
}