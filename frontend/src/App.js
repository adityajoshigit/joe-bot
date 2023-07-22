import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./App.css";
import ApplicationInputForm from "./components/ApplicationInputForm";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <ApplicationInputForm />
      </div>
    </LocalizationProvider>
  );
}

export default App;
