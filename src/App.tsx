import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { StyledButton } from "./styles/buttons";
import { StyledText, StyledTitle } from "./styles/typography";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <StyledTitle tag="h1" fontWeight={600} opacity={0.3} fontSize="one">
          Titulo
        </StyledTitle>
        <StyledText color="blue">Texto</StyledText>
        <StyledButton buttonStyle="outline" buttonSize="small">
          Botão
        </StyledButton>
      </Main>
    </div>
  );
}

export default App;
