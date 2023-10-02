import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Container from "../ui/Container";

function Header() {
  return (
    <Container $type="main" $flex="column">
      <Heading as="h1">Simple, traffic-based pricing</Heading>
      <Container $flex="column" $screenSize="large">
        <Paragraph $type="s">Sign-up for our 30-day trial.</Paragraph>
        <Paragraph $type="s">No credit card reguired.</Paragraph>
      </Container>
    </Container>
  );
}

export default Header;
