import { z } from "zod";

export const ProjectSchema = z.object({
  role: z.string(),
  period: z.string(),
  client: z.string(),
  description: z.string(),
  skills: z.array(z.string()).describe("Verktyg och teknologier med betyg 1-5"),
  // Nya fält för djupare kontext
  narrative: z
    .string()
    .optional()
    .describe("Berättelsen om projektet: arkitekturval, utmaningar och lösningar"),
  quantifiedResults: z
    .string()
    .optional()
    .describe("Siffror eller konkreta förbättringar, t.ex. 'Sänkte laddtider med 30%'"),
  achievements: z
    .array(z.string())
    .optional()
    .describe("Specifika milstolpar du nådde i projektet"),
});

export const SkillItemSchema = z.object({
  name: z.string(),
  level: z.number(),
  years: z.number().nullable(),
  category: z.string(),
  years_unit: z.string().optional(),
});

export const SkillsSchema = z.object({
  total: z.number(),
  items: z.array(SkillItemSchema),
});

export const ReferenceSchema = z.object({
  name: z.string(),
  role: z.string(),
  assignment: z.string(),
  client: z.string(),
  reference_text: z.string(),
});

export const CertificationSchema = z.object({
  name: z.string(),
  year: z.number(),
  type: z.string(),
  issuer: z.string(),
});

export const EmployerSchema = z.object({
  name: z.string(),
  period: z.string(),
});

export const EducationSchema = z.object({
  program: z.string(),
  school: z.string(),
  period: z.string(),
  address: z.string(),
  level: z.string(),
});

export const LanguageSchema = z.object({
  name: z.string(),
  level: z.string(),
});

export const CommitmentSchema = z.object({
  name: z.string(),
  period: z.string(),
  description: z.string(),
  link: z.string().url().optional(),
});

export const BehavioralStorySchema = z.object({
  situation: z.string().describe("Kontext: Vad hände? Vilket projekt (t.ex. Telia, Ellos)?"),
  action: z.string().describe("Vad gjorde DU specifikt för att lösa det?"),
  result: z.string().describe("Vad blev utfallet?"),
  trait: z
    .string()
    .describe("Egenskap detta visar (t.ex. Krisledarskap, Pragmatism, Teknisk nyfikenhet)"),
});

export const CareerDatabaseSchema = z.object({
  name: z.string(),
  title: z.string(),
  company: z.string(),
  roles: z.array(z.string()),
  presentations: z.object({
    professional: z.string(),
    personal: z.string(),
  }),
  projects: z.array(ProjectSchema),
  skills: SkillsSchema,
  other_skills: z.array(z.string()),
  references: z.array(ReferenceSchema),
  certifications_and_courses: z.array(CertificationSchema),
  employers: z.array(EmployerSchema),
  education: z.array(EducationSchema),
  languages: z.array(LanguageSchema),
  commitments_and_publications: z.array(CommitmentSchema),
  personality: z
    .object({
      traits: z.array(z.string()).describe("Kärnegenskaper som konsult"),
      workStyle: z.string().describe("Hur du fungerar i team, autonoma miljöer och under press"),
      conflictResolution: z
        .string()
        .describe("Hur du hanterar tekniska oenigheter (t.ex. arkitekturval)"),
      behavioralStories: z.array(BehavioralStorySchema),
    })
    .optional(),
  vision: z
    .object({
      consultingPhilosophy: z.string().describe("Din filosofi som frilansare/egenföretagare"),
      idealClient: z
        .string()
        .describe("Typen av bolag och teknikstack du vill leverera mest värde till"),
      shortTermGoals: z.array(z.string()).describe("Mål för det kommande året i egna bolaget"),
    })
    .optional(),
});

export type CareerDatabase = z.infer<typeof CareerDatabaseSchema>;
