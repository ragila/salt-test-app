import { MantineProvider, Text } from "@mantine/core";
import { HomeScreen } from "./screens/HomeScreen";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HomeScreen />
    </MantineProvider>
  );
}
