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

interface Publication {
    id: number; 
    year: number;
    title: string;
    authors: string; 
    type: 'poster' | 'book' | 'chapter' | 'journal' | 'exhibition_catalog';
    publisher?: string;
    location?: string; 
    context?: string;
    url?: string;
}