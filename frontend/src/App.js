import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./App.css";
// import ApplicationInputForm from "./components/ApplicationInputForm";
import FormContainer from "./components/FormContainer";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <FormContainer />
      </div>
    </LocalizationProvider>
  );
}

export default App;
