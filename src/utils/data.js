import {
  BadgeCheck,
  Banknote,
  Building2,
  Camera,
  Car,
  Castle,
  ClipboardCheck,
  Clock3,
  Crosshair,
  Eye,
  Factory,
  Handshake,
  HardHat,
  HeartPulse,
  Hospital,
  LockKeyhole,
  Radio,
  School,
  Shield,
  ShieldCheck,
  Siren,
  Star,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const heroPills = ['Armed Security', 'Industrial Protection', 'VIP Security', 'CCTV Monitoring', 'Event Security', 'Corporate Security'];

export const heroCards = [
  { label: '24/7 Protection', icon: Clock3 },
  { label: 'Verified Guards', icon: BadgeCheck },
  { label: 'Rapid Response', icon: Siren },
  { label: 'Trusted By Businesses', icon: Handshake },
];

export const services = [
  { title: 'Corporate Security', icon: Building2, description: 'Disciplined guards for offices, reception zones, access gates, and executive floors.' },
  { title: 'Residential Security', icon: Castle, description: 'Reliable society and apartment protection with visitor checks and patrol routines.' },
  { title: 'Industrial Security', icon: Factory, description: 'High-alert manpower for factories, warehouses, plants, and logistics yards.' },
  { title: 'Event Security', icon: Users, description: 'Crowd control, entry screening, backstage watch, and movement coordination.' },
  { title: 'Parking Security', icon: Car, description: 'Vehicle movement control, ticketing support, and parking discipline management.' },
  { title: 'School Security', icon: School, description: 'Student-safe gate operations, parent verification, and campus movement watch.' },
  { title: 'Hospital Security', icon: Hospital, description: 'Calm, alert protection for hospitals, emergency entries, and sensitive wards.' },
  { title: 'Construction Site', icon: HardHat, description: 'Night watch, material protection, entry registers, and perimeter inspection.' },
];

export const features = [
  { title: '24/7 Monitoring', icon: Eye },
  { title: 'Trained Professionals', icon: UserCheck },
  { title: 'Fast Emergency Response', icon: Zap },
  { title: 'Affordable Packages', icon: Banknote },
  { title: 'Verified Staff', icon: BadgeCheck },
  { title: 'Modern Equipment', icon: Radio },
  { title: 'Client Confidentiality', icon: LockKeyhole },
  { title: 'Advanced Surveillance', icon: Camera },
];

export const stats = [
  { value: '250+', label: 'Clients' },
  { value: '500+', label: 'Security Staff' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

export const timeline = [
  'Requirement Analysis',
  'Security Planning',
  'Staff Deployment',
  'Monitoring & Reporting',
  'Continuous Protection',
];

export const testimonials = [
  { name: 'Rakesh Patel', role: 'Factory Owner', text: 'Their industrial deployment brought discipline to our gates and reduced unwanted movement from day one.' },
  { name: 'Neha Shah', role: 'Event Organizer', text: 'The team handled our entry, VIP route, and crowd flow professionally throughout a packed evening.' },
  { name: 'Kirit Mehta', role: 'Society Chairman', text: 'Our residents feel safer. The guards are punctual, polite, and strict with visitor verification.' },
  { name: 'Anjali Desai', role: 'Corporate Office Manager', text: 'MAA DURGA gives us the confidence of a trained, responsive security partner.' },
];

export const starIcons = Array.from({ length: 5 }, (_, index) => ({ id: index, Icon: Star }));

export const contactDetails = [
  { label: 'Office', value: 'pashupati Textiles , Market 3 parking , Nr. Shara Darwaja , Surat, Gujarat, India', icon: Building2 },
  { label: 'Phone', value: '+91 9879323700 , +91 9898892210', icon: Siren },
  { label: 'Email', value: 'prajjwalmishra@gmail.com', icon: ClipboardCheck },
  { label: 'Hours', value: '24/7 Operations Desk', icon: HeartPulse },
];
