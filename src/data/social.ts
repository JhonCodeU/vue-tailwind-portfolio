export interface Social {
    title: string;
    icon: string;
    color: string;
    url: string;
}

export const socials: Social[] = [
    {
        title: 'LinkedIn',
        icon: 'linkedin',
        color: 'text-blue-500',
        url: 'https://www.linkedin.com/in/jhon-arcila-casta%C3%B1o-bba7b1142/',
    },
    {
        title: 'Github',
        icon: 'github',
        color: 'text-gray-500',
        url: 'https://github.com/JhonCodeU'
    },
    {
        title: 'Twitter',
        icon: 'twitter',
        color: 'text-blue-500',
        url: '#'
    },
    {
        title: 'YouTube',
        icon: 'youtube',
        color: 'text-red-500',
        url: '#'
    }
]

export default socials;