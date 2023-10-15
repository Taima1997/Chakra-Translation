'use client'



import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import {useRouter} from "next/navigation";
import {Container} from "@chakra-ui/react";


export default function Layout({children,}: {
    children: React.ReactNode
}) {
    const router = useRouter()

return (
    <div>
    
    
        <ChakraProvider>
         
         
         <Container maxW={'5xl'} py={12} minH={'3xl'}>
                 <Navbar/>
                    {children}
                    <Footer/> 
         </Container>
            
        </ChakraProvider>
       
       
       
    </div>
    );
  }