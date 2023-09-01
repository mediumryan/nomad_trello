import { ThemeProvider, styled } from 'styled-components';
import './CSS/index.css';
import { defaultTheme } from './theme';
import ListBox from './Components/ListBox';
import Header from './Components/Header';

const MainWrapper = styled.div`
    height: 100vh;
    background-color: ${(props) => props.theme.bg_100};
    color: ${(props) => props.theme.text_100};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 48px;
`;

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <MainWrapper>
                <Header />
                <ListBox />
            </MainWrapper>
        </ThemeProvider>
    );
}

export default App;
