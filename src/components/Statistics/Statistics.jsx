import Box from "components/Box/Box";

export default function Statistics ({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-around"
        >
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </Box>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage()}%</p>
    </div>
  )
}
