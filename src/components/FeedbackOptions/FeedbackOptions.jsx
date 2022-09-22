export default function FeedbackOptions({ options, onLeaveFeedback }) {
    const keys = Object.keys(options)
    const buttons = keys.map(key => {
        return <button key={key} type="button" onClick={() => onLeaveFeedback(key)}>{key}</button>
    })
    return (
        <div>
            {buttons}
        </div>
    )
}
