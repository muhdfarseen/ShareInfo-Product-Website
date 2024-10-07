import { Flex, SimpleGrid, Text, Image } from '@mantine/core';

export const TrustedBy = () => {
    return (
        <>
            <Text ta={'center'}>T R U S T E D &nbsp;&nbsp;B Y</Text>

            <SimpleGrid mt={40} cols={{ base: 3, sm: 5 }} spacing={{ base: 'md', sm: 'md' }} verticalSpacing={{ base: 'md', sm: 'md' }}>
                {companyLogos.map((item) => (
                    <Flex key={item.name} className='trusted_by' p={30} justify={'center'} align={'center'} w={'100%'} h={100}>
                        <Image fit={'contain'} w={'auto'} h={70} src={item.url} alt={item.name} />
                    </Flex>
                ))}
            </SimpleGrid>
        </>
    );
};

const companyLogos = [
    {
        name: 'Confederation_of_Indian_Industry',
        url: 'https://www.cii.in/images_new/cii-logoNew.png'
    },
    {
        name: 'college',
        url: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/company-logos/r1j6ikrmklberouxzr3s'
    },
    {
        name: 'collegeVM',
        url: 'https://www.vjec.ac.in/public/img/logo/vjec-logo-white.svg'
    },
    {
        name: 'kk',
        url: 'https://keralakonnect.com/web/image/website/1/logo?unique=8a1db69'
    },
    {
        name: 'KEM',
        url: 'https://skills.knowledgemission.kerala.gov.in/theme/remui/pix/itrack_logo.png'
    },

    {
        name: 'TALROP',
        url: 'https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/01-09-2022/Talrop_logo.svg'
    },

    {
        name: 'sanseera',
        url: 'https://sansera.in/wp-content/uploads/2017/06/SanseraLogo.png'
    },
    {
        name: 'tata adv sys',
        url: 'https://www.tataadvancedsystems.com/website/images/logo.png'
    },

    {
        name: 'Ashok',
        url: 'https://assets.upstox.com/content/assets/images/cms/202452/Ashok-Leyland-Logo.png'
    },
    {
        name: 'Schneider',
        url: 'https://www.deltoncontrol.com/wp-content/uploads/2020/12/1280px-Schneider_Electric_2007.svg.png'
    },

    {
        name: 'caparo',
        url: 'https://www.itijobs.co/wp-content/uploads/2020/10/new-logo-02.png.webp'
    },

    {
        name: 'mazidiktyo',
        url: 'https://www.mazidiktyo.com/images/logo.png'
    },

    {
        name: 'deltataero',
        url: 'https://www.deltataero.com/assets/images/logo.png'
    },
    {
        name: 'vikram',
        url: 'https://www.vikramsolar.com/wp-content/uploads/2022/04/cropped-logo-1.png.webp'
    },
    {
        name: 'mizone',
        url: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/company-logos/mfv9btdouzegsumwulqd'
    },

    {
        name: 'inexoft',
        url: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/company-logos/usgitsntt13qyjw9ynna'
    },

    {
        name: 'bni',
        url: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/company-logos/srta06mpyoqoxnilnjrw'
    },
    {
        name: 'cadd',
        url: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/company-logos/owjkcbt2wgzyg22ofdn3'
    },
    {
        name: 'daeseung',
        url: 'https://mapolbs.com/images/clients/daeseung-auto-parts.png'
    },
    {
        name: 'prospire',
        url: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/company-logos/dxvu8pc2kvtmaiaovjqi'
    }
];
