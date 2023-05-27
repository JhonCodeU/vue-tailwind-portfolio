export interface Contact {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
}

const contacts: Contact[] = [
    {
        icon: 'message',
        title: 'Have a question?',
        subtitle: 'I am here to help you.',
        description: 'Email me at jhondeiber3030@gmail.com',
    },
    {
        icon: 'location',
        title: 'Current Location',
        subtitle: 'Manizales, CO',
        description: 'Serving clients worldwide',
    }
]

export default contacts;