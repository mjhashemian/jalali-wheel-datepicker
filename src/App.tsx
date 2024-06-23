import { DatePicker } from "./components/DatePicker";

function App() {
  return (
    <DatePicker
      buttonText="انتخاب تاریخ"
      header={<div style={{ textAlign: "center" }}> تاریخ را انتخاب کنید </div>}
    />
  );
}

export default App;
