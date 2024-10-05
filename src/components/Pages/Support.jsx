import { Flex } from '@mantine/core';
import { Navbar } from '../ui/Navbar/Navbar';
import { Footer } from '../ui/Footer/Footer';
import { SectionOne } from '../ui/Support/SectionOne';

export const Support = () => {
    return (
        <>
         <div style={{position:'sticky', top:0, zIndex:9999999999}}>
              <Navbar />
         </div>
          
            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <SectionOne />
                </Flex>
            </Flex>
            <Footer />
        </>
    );
};
