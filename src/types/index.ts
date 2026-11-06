export interface UserProfile {
  username: string;
  anonymousId: string;
  joinedAt: string;
  level: number;
  levelTitle: string;
  xp: number;
  stars: number;
  completedMissions: string[];
  unlockedBadges: string[];
  collectedCardsMisi1?: string[];
  misi2Progress?: Mission2ProgressRecord;
}

export type CulturalAspectType = 'benda' | 'takbenda';

export interface Mission2CardItem {
  id: string;
  name: string;
  categoryType: CulturalAspectType;
  pairedConceptGroup?: 'angklung' | 'batik' | 'wayang' | 'arsitektur' | 'seni-tutur';
  aspectSubtitle: string;
  region: string;
  island: string;
  image: string;
  description: string;
  physicalTraitOrPractice: string;
  classificationReason: string;
  funFact: string;
}

export interface Mission2Riddle {
  id: string;
  clueText: string;
  targetCategory: CulturalAspectType;
  options: {
    id: string;
    label: string;
    isCorrect: boolean;
    typeLabel: string;
  }[];
  explanation: string;
}

export interface Mission2ProgressRecord {
  completed: boolean;
  completedAt?: string;
  sortingAccuracy: number;
  totalAttempts: number;
  riddleScore: number;
  classifiedCardIds: string[];
}

export interface Mission1CardItem {
  id: string;
  name: string;
  region: string;
  island: string;
  coordinates: { x: number; y: number };
  image: string;
  shortDescription: string;
  functionUse: string;
  culturalValue: string;
  funFact: string;
  clue: string;
  sourceRef?: string;
  category: 'Rumah Adat' | 'Seni Pertunjukan' | 'Cerita Rakyat' | 'Senjata Tradisional' | 'Alat Musik' | 'Kain Tradisional';
}

export interface Mission1Challenge {
  id: string;
  targetCardId: string;
  clueText: string;
  hintText: string;
  correctExplanation: string;
}


export interface Mission {
  id: string;
  orderNumber: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  learningObjectives: string[];
  keyTopics: string[];
  image: string;
  status: 'available' | 'in_progress' | 'locked';
  requiredLevel: number;
  estimatedMinutes: number;
  starReward: number;
  xpReward: number;
  badgeReward: string;
  color: string;
}

export interface CulturalItem {
  id: string;
  name: string;
  category: 'Rumah Adat' | 'Pakaian Adat' | 'Alat Musik' | 'Seni Pertunjukan' | 'Kuliner Tradisional';
  region: string;
  island: 'Sumatera' | 'Jawa' | 'Kalimantan' | 'Sulawesi' | 'Bali & Nusa Tenggara' | 'Maluku & Papua';
  shortDescription: string;
  funFact: string;
  iconName: string;
  badge: string;
}

export interface AchievementBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  category: 'Eksplorasi' | 'Pengetahuan' | 'Pelestarian' | 'Spesial';
}

export interface RegionCheckpoint {
  id: string;
  name: string;
  island: string;
  coordinates: { x: number; y: number }; // percentage on map
  culturalHighlight: string;
  missionConnection: string;
  unlocked: boolean;
  trivia: string;
}
