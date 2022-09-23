import Box from "components/Box/Box";
import { Text, Value } from "./Statistics.styles";
import { AiFillLike } from 'react-icons/ai';

export default function Statistics ({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Box
      display="flex"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Box
      textAlign="left">
        <p><Text>Good: </Text><Value>{good}</Value></p>
        <p><Text>Neutral: </Text><Value>{neutral}</Value></p>
        <p><Text>Bad: </Text><Value>{bad}</Value></p>
      </Box>
      <Box
        display="flex"
        alignItems="flex-end"
        textAlign="left">
        <Box
          pb="1px"
          pr="2px">
          <AiFillLike fill="#fff" size="20px" />
        </Box>
        <div>
          <p><Text>Total: </Text><Value>{total}</Value></p>
          <p><Text>Positive feedback: </Text><Value>{positivePercentage()}%</Value></p>
        </div>
      </Box>
    </Box>
  )
}
