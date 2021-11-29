import { useContext, useEffect, useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Alert,
    AlertIcon
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Router from 'next/router';
import FirebaseContext from "contexts/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { logout } from "services/firebase";
import router from "next/router";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const { auth } = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const isInvalid = password === '' || email === '';

    const handleShowClick = () => setShowPassword(!showPassword);

    // Firebase

    const handleSubmit = async (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                Router.push('/');
            })
            .catch((err) => {
                setError("Email or password is invalid!");
            });
    };

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         router.push('/');
    //     }
    // });

    useEffect(() => {
        logout();
    }, []);

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form onSubmit={handleSubmit}>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            {error && <Alert status="error"><AlertIcon />{error}</Alert>}
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="email address" onChange={({ target }) => setEmail(target.value)} />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        onChange={({ target }) => setPassword(target.value)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                disabled={isInvalid}
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                Don't have an account?{" "}
                <Link color="teal.500" href="/signup">
                    Sign Up
                </Link>
            </Box>
        </Flex>
    );
};

export default Login;
