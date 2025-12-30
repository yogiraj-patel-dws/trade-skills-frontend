import { Users, BookOpen, Award, Clock, Code, Palette, Camera, Music, Wrench, Calculator, Layout, Lightbulb } from 'lucide-react';

export const STATS = [
  {
    icon: Users,
    value: '10K+',
    label: 'Active Users'
  },
  {
    icon: BookOpen,
    value: '500+',
    label: 'Skills Available'
  },
  {
    icon: Award,
    value: '95%',
    label: 'Success Rate'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support'
  }
];

export const POPULAR_SKILLS = [
  {
    name: 'Web Development',
    icon: Code
  },
  {
    name: 'Graphic Design',
    icon: Palette
  },
  {
    name: 'Photography',
    icon: Camera
  },
  {
    name: 'Music Production',
    icon: Music
  },
  {
    name: 'Home Repair',
    icon: Wrench
  },
  {
    name: 'Math Tutoring',
    icon: Calculator
  }
];

export const TESTIMONIALS = [
  {
    name: 'Elena Rodriguez',
    role: 'Learning Photography',
    content: "TradeSkill completely changed how I approach learning. It feels so much more personal than watching videos.",
    avatar: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    name: 'David Kim',
    role: 'Teaching Yoga',
    content: "I've met amazing people here. I taught yoga and got expert advice on my small business finances.",
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Learning Python',
    content: "The platform is intuitive and the community is incredibly supportive. Highly recommend!",
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];

// Dashboard Data
export const DASHBOARD_STATS = [
  { label: 'Available Credits', value: '12', trend: '+2 this week', icon: Layout, color: 'bg-green-50', iconColor: 'text-green-500' },
  { label: 'Sessions Taught', value: '8', trend: '+1 this week', icon: Award, color: 'bg-blue-50', iconColor: 'text-blue-500' },
  { label: 'Skills Learned', value: '5', trend: 'No change this week', icon: Lightbulb, color: 'bg-purple-50', iconColor: 'text-purple-500' },
];

export const UPCOMING_SESSIONS = [
  {
    id: 1,
    title: 'Intro to Guitar',
    time: '2:00 PM - 3:00 PM',
    date: 'TODAY',
    instructor: 'Mike',
    type: 'Video Call',
    img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=100&h=100&fit=crop',
    action: 'Join Call',
    isPrimary: true
  },
  {
    id: 2,
    title: 'Conversational Spanish',
    time: '10:00 AM - 11:00 AM',
    date: 'TOMORROW',
    instructor: 'Sarah',
    type: 'Video Call',
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=100&h=100&fit=crop',
    action: 'Details',
    isPrimary: false
  }
];

export const RECOMMENDATIONS = [
  { title: 'Advanced Photoshop', author: 'Alex D.', rating: 4.9, reviews: 120, credits: 3, tag: 'Design', img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=300&h=200&fit=crop' },
  { title: 'Urban Gardening', author: 'Maria G.', rating: 5.0, reviews: 45, credits: 2, tag: 'Lifestyle', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=300&h=200&fit=crop' },
  { title: 'French Cooking 101', author: 'Chef Jean', rating: 4.8, reviews: 85, credits: 4, tag: 'Culinary', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=200&fit=crop' },
];

export const ACTIVITY_ITEMS = [
  {
    avatar: 'https://i.pravatar.cc/150?u=elena',
    color: 'bg-emerald-500',
    text: { name: 'Elena', action: 'rated', skill: 'Yoga Basics', detail: '5 stars' },
    time: '2 mins ago'
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=david',
    color: 'bg-blue-500',
    text: { name: 'David', action: 'just learned', skill: 'Digital Marketing', detail: '' },
    time: '15 mins ago'
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    color: 'bg-purple-500',
    text: { name: 'Marcus', action: 'posted a request:', skill: '', detail: '"Looking for Python tutor"' },
    time: '1 hour ago'
  }
];

// Sessions Data
export const LEARNING_SESSIONS = [
  {
    title: "Advanced React Patterns",
    host: "Sarah J.",
    duration: "1h 30m",
    level: "Intermediate",
    cost: "-15",
    status: "Scheduled",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=React",
    hostImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    title: "Pottery Basics",
    host: "Mike T.",
    duration: "2h 00m",
    level: "Beginner",
    cost: "-20",
    status: "Requested",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Pottery",
    hostImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
  },
  {
    title: "Guitar for Beginners",
    host: "David L.",
    duration: "45m",
    level: "Beginner",
    cost: "-10",
    status: "Completed",
    date: "Mar 12, 2023",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Guitar",
    hostImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

export const TEACHING_SESSIONS = [
  {
    title: "Advanced React Patterns",
    duration: "60 mins",
    credits: "+40",
    status: "Requested" as const,
    learner: "Sarah Jenkins",
    learnerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    icon: "💻"
  },
  {
    title: "Guitar Basics: Chords",
    duration: "45 mins",
    credits: "+25",
    status: "Scheduled" as const,
    learner: "Mike Ross",
    learnerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    icon: "🎸"
  },
  {
    title: "Digital Illustration 101",
    duration: "90 mins",
    credits: "+60",
    status: "Scheduled" as const,
    learner: "Emily Chen",
    learnerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    icon: "🎨"
  },
  {
    title: "French Conversation",
    duration: "30 mins",
    credits: "+15",
    status: "Completed" as const,
    learner: "Jean Luc",
    learnerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    icon: "🗣️"
  },
  {
    title: "Portrait Photography",
    duration: "60 mins",
    credits: "+30",
    status: "Rejected" as const,
    learner: "Alice Wong",
    learnerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    icon: "📷"
  }
];