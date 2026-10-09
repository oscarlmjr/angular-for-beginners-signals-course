export enum CourseCategory {
  BEGINNER = 'BEGINNER',
  ADVANCED = 'ADVANCED',
}

export interface Course {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  category: CourseCategory;
  // category: string;
  seqNo: number;
  price: number;
}

// export type CourseCategory = 'beginner' | 'advanced';
