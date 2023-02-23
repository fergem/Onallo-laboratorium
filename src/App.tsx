import { useColorModeValue, VStack } from "@chakra-ui/react";
import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  const bg = useColorModeValue("#EAEFD3", "#505168")
  const color = useColorModeValue("#505168", "#EAEFD3")
  return (
    <VStack align="stretch" backgroundColor={bg} color={color}>
      <Navbar />
      <Home />
    </VStack >
  );
}

export default App;
