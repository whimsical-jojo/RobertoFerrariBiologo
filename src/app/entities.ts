interface Book {
    id: number;
    title: string;
    subtitle?: string;
    details?: string;
    description?: string;
    imageUrl?: string;
    linkLabel: string;
    linkUrl: string;
}

interface Video {
    id: number;
    title: string;
    url: string;
}