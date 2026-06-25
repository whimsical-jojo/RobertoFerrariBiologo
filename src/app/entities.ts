import { SafeResourceUrl } from "@angular/platform-browser";

export interface Book {
    id: number;
    title: string;
    subtitle?: string;
    details?: string;
    description?: string;
    imageUrl?: string;
    linkLabel: string;
    linkUrl: string;
}

export interface Media {
    id: number;
    title: string;
    url: string | SafeResourceUrl;
    category:string;
    format: 'video' | 'audio' | 'pdf' | 'article';
}

export interface Publication {
    id: number;
    year: number;
    title: string;
    authors: string;
    type: 'poster' | 'book' | 'chapter' | 'journal' | 'exhibition_catalog'; //Maybe unnecessary?
    publisher?: string;
    location?: string;
    context?: string;
    url?: string;
}

//Hmm maybe calling this "Event" wasn't the best choice given Events in the browser and ugh who cares
export interface ScheduledEvent {
    id: number;
    startDate: string;
    endDate?: string;
    hostContext: string;
    location?: string;
    title?: string;
    speakers?: string[];
    imageUrl?: string;
    link?: string;
}