import Box from "components/Box/Box";
import { Title } from "./Section.styles";

export default function Section ({title, children}) {
  return (
    <Box
      textAlign="center"
      p={5}  
    >
        <Title>{title}</Title>
        {children}
    </Box>
  )
}
