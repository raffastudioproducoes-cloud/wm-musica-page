export const supportedLocales = ['pt-BR'] as const
export type Locale = (typeof supportedLocales)[number]
type Copy = { locale: Locale; artistName: string; descriptor: string; claim: string; listen: string; trajectory: string; menu: string; close: string }
const pt: Copy = {locale:'pt-BR',artistName:'Wilma Machado',descriptor:'Cantora • Compositora • Escritora Cristã',claim:'Música, palavra e fé transformadas em obra.',listen:'Ouça Wilma Machado',trajectory:'Conheça sua trajetória',menu:'Abrir menu',close:'Fechar menu'}
export function getCopy(): Copy { return pt }
