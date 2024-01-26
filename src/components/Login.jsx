import React from 'react'
import { Button, Container, Heading, VStack, Text, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack
                alignItems={'stretch'}
                spacing={'8'}
                w={['full', '96']}
                m={'auto'}
                my={'16'}
            >
                <Heading>Welcome Back</Heading>
                <Input placeholder={'Email'} type='email' required focusBorderColor='purple.500'/>
                <Input placeholder={'Password'} type='password' required focusBorderColor='purple.500'/>
                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link>Forget Password</Link>
                </Button>
                <Button colorScheme='purple' type='submit'>
                    <Link to={'/forgetpassword'}>Log In</Link>
                </Button>

                <Text textAlign={'right'}>
                    New User ? 
                    <Button variant={'link'} colorScheme='purple'>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </Text>

            </VStack>
        </form>
    </Container>
  )
}

export default Login
