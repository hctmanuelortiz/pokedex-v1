import styled from "styled-components";

const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const InfoFooter = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


`

const Footer = () => {
  return (
    <Container>
      <InfoFooter>
        {" "}
        <a href="https://twitter.com/htcmanuelortiz" target="_blank">
          <ion-icon className='icon' size="large" name="logo-twitter"></ion-icon>
        </a>
      </InfoFooter>
      <InfoFooter>
        {" "}
        <a>
          {" "}
          Developed by Manuel
          Ortiz
        </a>{" "}
      </InfoFooter>
      <InfoFooter>
        {" "}
        <a href="https://github.com/hctmanuelortiz" target="_blank">
          <ion-icon className='icon' size="large" name="logo-github"></ion-icon>
        </a>{" "}
      </InfoFooter>
    </Container>
  );
};

export default Footer;
