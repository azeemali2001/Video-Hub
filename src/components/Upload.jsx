import React from 'react'
import { Container, VStack, HStack, Input, Button } from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai'


const Upload = () => {
  return (
    <Container maxW={'conatiner.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'100vh'} p={'16'}>
            <AiOutlineCloudUpload size={'10vmax'}/>
            <form>
                <HStack>
                    <Input
                        required
                        type='file'
                        css={{
                            '&::file-selector-button' : {
                                border:'none',
                                width:'calc(100% + 36px)',
                                height:'100%',
                                marginLeft:'-18px',
                                color:'purple',
                                backgroundColor:'white',
                                cursor:'pointer'
                            }
                        }}
                    ></Input>
                    <Button type='submit' colorScheme='purple'>Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload
