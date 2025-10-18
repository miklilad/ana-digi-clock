import { Clock } from "./Clock";
import { Settings, SettingsProvider } from "./settings/Settings";

function App() {
  return (
    <>
      <SettingsProvider>
        <Clock />
        <Settings />
      </SettingsProvider>
    </>
  );
}

export default App;
