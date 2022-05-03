import { ClosingButton } from "../../closingButton"
import { feedbackTypes, FeedbackType } from "../widgetForm"
interface FeedbackTypeStepProps {
    onFeedbackTypeChange: (type: FeedbackType) => void
}

export function FeedbackTypeStep( {onFeedbackTypeChange}: FeedbackTypeStepProps){
    
    return (
        <>
        <header>
            <ClosingButton/>
            <span className="text-xl text-text-primary leading-6 px-4">
                Deixe seu Feedback
            </span>
        </header>
            <div className="flex py-8 gap-2 w-full">    
            {Object.entries(feedbackTypes).map( ([key, value]) => {
                return (
                    <button
                    className="bg-surface-secondary rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none  "
                    onClick={() => onFeedbackTypeChange(key as FeedbackType)}
                    type="button"
                    key={key}
                    >
                        <img src={value.image.source} alt={value.image.alt}/>
                        <span>{value.title}</span>
                    </button>
                )
            })}
            </div>
        </>
    )
}