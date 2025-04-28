import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Fund Management System',
    description: 'A comprehensive trust fund management system with entity management, member tracking, collection handling, and financial history tracking. Features role-based access control with super admin, admin, and user levels.',
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://houseofharvest.vercel.app/',
    tags: ['React', 'TypeScript', 'Node.js', 'Financial API'],
    features: [
      {
        title: 'Entity Management',
        description: 'Add and manage entities with detailed information including entity code, name, contact details, and address.',
        image: 'https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Member Management',
        description: 'Add members to specific entities with comprehensive profile information and donation tracking capabilities.',
        image: 'https://images.pexels.com/photos/8297538/pexels-photo-8297538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Collection System',
        description: 'Admin-exclusive collection management with detailed transaction tracking and approval workflow.',
        image: 'https://images.pexels.com/photos/8297564/pexels-photo-8297564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Financial Calendar',
        description: 'Track donation history and financial activities with an interactive calendar interface.',
        image: 'https://images.pexels.com/photos/8297619/pexels-photo-8297619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    id: '2',
    title: 'V11 Tech Website',
    description: 'Custom website development for V11 Tech, showcasing their kiosk and KDS solutions with an elegant, responsive design.',
    image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://v11tech.vercel.app/',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Web Development']
  },
  {
    id: '3',
    title: 'Digital Marketing Campaign',
    description: 'Strategic digital marketing campaign that increased client visibility by 150% and engagement by 200% over 3 months.',
    image: 'https://images.pexels.com/photos/7688335/pexels-photo-7688335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Content Strategy'],
    features: [
      {
        title: 'Social Media Management',
        description: 'Comprehensive social media strategy across multiple platforms including content creation and community engagement.',
        image: 'https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Content Marketing',
        description: 'Creation and distribution of valuable, relevant content to attract and retain a clearly defined audience.',
        image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'SEO Optimization',
        description: 'Technical and content optimization to improve search engine rankings and organic traffic.',
        image: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  }
];