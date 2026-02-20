
export interface CaseStudy {
  id: number;
  title: string;
  tag: string;
  task: string;
  solution: string;
  result: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  role: string;
  platform: 'WhatsApp' | 'Telegram';
  time: string;
  content: string;
  color: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
