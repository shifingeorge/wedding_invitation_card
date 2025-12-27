
export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  dressCode: string;
  colorTheme: string;
  icon: string;
}

export interface GuestInfo {
  name: string;
  adults: number;
  children: number;
  phone: string;
  email: string;
  events: string[];
  dietary: string;
  message: string;
}
