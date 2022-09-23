import Box from "components/Box/Box";
import { Text } from "./Statistics.styles";

export default function Statistics ({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Box
      display="flex"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Box
      textAlign="left">
        <p><Text>Good: </Text>{good}</p>
        <p><Text>Neutral: </Text>{neutral}</p>
        <p><Text>Bad: </Text>{bad}</p>
      </Box>
      <Box
      textAlign="left">
        <p><Text>Total: </Text>{total}</p>
        <p><Text>Positive feedback: </Text>{positivePercentage()}%</p>
      </Box>
    </Box>
  )
}
