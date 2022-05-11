import { GlobalStyle } from "./components/global/globalCSS";
import GridContatos from "./components/gridContatos";
import HeaderDiv from "./components/header";
import InputsArea from "./components/inputsArea";

function App() {
	return (
		<main>
			<GlobalStyle />
			<HeaderDiv />
			<InputsArea />
			<GridContatos />
		</main>
	);
}

export default App;
