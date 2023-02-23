import { background, Button, ChakraComponent, useBoolean, useColorModeValue, } from "@chakra-ui/react";

export default function NavButton({ name = "default" }) {
    const color = useColorModeValue("#B3C0A4", "#27233A")

    return <Button
        borderColor={color}
        _hover={{ bg: color }}
        variant="outline"
        fontSize={"md"}>
        {name}
    </Button >
}

