export const supportedLocales = ['pt-BR', 'en'] as const
export type Locale = (typeof supportedLocales)[number]
type Copy = { locale: Locale; artistName: string; descriptor: string; claim: string; listen: string; trajectory: string; menu: string; close: string }
const pt: Copy = {locale:'pt-BR',artistName:'Wilma Machado',descriptor:'Cantora • Compositora • Escritora Cristã',claim:'Música, palavra e fé transformadas em obra.',listen:'Ouça Wilma Machado',trajectory:'Conheça sua trajetória',menu:'Abrir menu',close:'Fechar menu'}
const en: Copy = {locale:'en',artistName:'Wilma Machado',descriptor:'Singer • Composer • Christian Writer',claim:'Music, word and faith transformed into work.',listen:'Listen to Wilma Machado',trajectory:'Discover her journey',menu:'Open menu',close:'Close menu'}
export function getCopy(locale: string): Copy { return locale === 'en' ? en : pt }
