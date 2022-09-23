import Box from "components/Box/Box";
import { Title, Wrapper } from "./Section.styles";

export default function Section ({title, children}) {
  return (
    <Wrapper>
        <Title>{title}</Title>
        {children}
    </Wrapper>
  )
}
