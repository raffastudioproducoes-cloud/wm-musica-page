# Prompt de estruturação completa — Wilma Machado

Use este prompt no agente de implementação para estruturar e finalizar o site da Wilma Machado a partir da pasta Stitch, preservando a tecnologia e as decisões já existentes nos projetos de referência.

## Papel

Atue como um time coordenado de produto, UI/UX, engenharia frontend, acessibilidade, testes e revisão.

Use a skill `ui-ux-pro-max` para as decisões de estrutura visual, interação, responsividade, tipografia, acessibilidade, motion e qualidade de interface.

Use também o perfil `frontend` para implementação, `test-engineer` para testes, `security-auditor` para riscos de segurança e `code-reviewer` para a revisão final, quando esses perfis estiverem disponíveis.

## Diretórios de trabalho

Projeto-alvo:

```text
C:\Users\rafae\Documents\Projetos\LandPage WM\stitch_wilma_machado_m_sica_palavra_e_f
```

Referência de implementação principal:

```text
C:\Users\rafae\Documents\Projetos\LandPage WM\WM Page Music
```

Referência de implementação/GitHub:

```text
C:\Users\rafae\Documents\Projetos\LandPage WM\wilma-machado-site-github
```

## Ordem obrigatória de leitura

Antes de editar qualquer arquivo:

1. leia o conteúdo completo de `PDR.docx` usando a ferramenta apropriada para documentos;
2. inspecione todas as variantes visuais do diretório Stitch;
3. leia `design-system/MASTER.md` de `WM Page Music`;
4. leia `design-system/MASTER.md` de `wilma-machado-site-github`;
5. inspecione `package.json`, `vite.config.ts`, `tsconfig*.json`, `eslint.config.js` e `vitest.config.ts` das referências;
6. inspecione `src/App.tsx`, `src/styles/tokens.css`, `src/styles/globals.css`, `src/main.tsx` e os testes existentes;
7. liste os assets de `public/` e confirme quais podem ser usados;
8. confirme o estado Git do projeto-alvo e não descarte alterações existentes.

Não implemente antes dessa inspeção.

## Stack obrigatória

Preserve a stack confirmada nas referências:

- React;
- TypeScript;
- Vite;
- CSS autoral existente;
- Vitest;
- Testing Library;
- deploy estático compatível com Cloudflare Pages e GitHub Pages.

Não introduza Next.js, Tailwind, shadcn, backend, banco, autenticação, CMS ou outra dependência estrutural sem uma necessidade aprovada e demonstrada.

## Hierarquia de fontes

Em caso de conflito, respeite esta prioridade:

1. informações aprovadas pelo usuário e assets oficiais fornecidos;
2. `PDR.docx`;
3. referências visuais Stitch;
4. `design-system/MASTER.md` dos projetos de referência;
5. implementação e conteúdo verificados em `WM Page Music` e `wilma-machado-site-github`;
6. recomendações do UI UX Pro Max que não conflitem com os itens anteriores.

Nunca substitua uma decisão aprovada por uma recomendação genérica do UI UX Pro Max.

## Direção de produto

O site é uma página oficial editorial para Wilma Machado, apresentando:

- música;
- palavra;
- fé;
- trajetória;
- obras literárias;
- projetos comunitários;
- vídeos;
- apresentações;
- músicas inéditas;
- contato profissional.

A experiência deve ser:

- serena;
- humana;
- elegante;
- espiritual;
- musical;
- editorial;
- premium sem ostentação;
- clara em dispositivos móveis.

Não transformar a página em SaaS, dashboard, plataforma de streaming, e-commerce ou landing page agressiva.

## Sistema visual obrigatório

Preserve o sistema já documentado:

### Cores

```css
--color-surface: #fff8f6;
--color-surface-container-lowest: #ffffff;
--color-surface-container-low: #f9f2f0;
--color-surface-container: #f4ecea;
--color-surface-container-high: #eee7e5;
--color-surface-container-highest: #e8e1df;
--color-text: #1e1b1a;
--color-text-muted: #4f4538;
--color-primary: #7c580a;
--color-primary-container: #b58a3c;
--color-outline: #817566;
--color-outline-subtle: #d2c4b3;
--color-inverse-surface: #33302f;
```

Não use preto absoluto, neon, gradiente roxo/rosa de IA, cores saturadas ou dourado excessivo.

### Tipografia

- `Bodoni Moda` para display e títulos;
- `Hanken Grotesk` para corpo, navegação, labels e controles;
- fallback com ampla cobertura Unicode;
- corpo mínimo de 16px;
- line-height confortável;
- não introduza uma terceira família tipográfica sem aprovação.

### Layout

- container máximo aproximado de 1280px;
- grid desktop de 12 colunas;
- margem desktop aproximada de 64px;
- margem mobile de 20px;
- gutter aproximado de 24px;
- unidade de espaçamento de 8px;
- seção com respiro editorial amplo;
- nenhum overflow horizontal em 320px, 360px, 375px, 390px ou 430px.

## Estrutura completa esperada

Estruture o site em seções sem inventar conteúdo:

1. skip link e estrutura semântica;
2. header transparente sobre o hero e superfície discreta após scroll;
3. menu desktop e menu mobile acessível;
4. seletor de idioma preservando o conteúdo existente;
5. hero editorial com descriptor, nome, frase, CTAs e retrato aprovado;
6. manifesto/introdução sobre música, palavra e fé;
7. discografia em destaque;
8. player ou links de música sem autoplay e sem fingir reprodução local inexistente;
9. trajetória em timeline editorial;
10. obras e projetos;
11. YouTube e vídeos;
12. músicas inéditas/licenciamento;
13. apresentações e convites;
14. contato com labels visíveis, validação e feedback de envio;
15. footer com navegação, redes e crédito existente.

Se alguma seção não tiver conteúdo ou asset confirmado, mantenha uma estrutura honesta e indique a pendência. Não crie biografia, link, obra, data, plataforma ou depoimento fictício.

## Interação e motion

Use motion como pontuação editorial, não como decoração contínua:

- entrada suave de texto e imagem;
- uma assinatura visual discreta no hero, se aprovada pela referência;
- hover sutil em cards e mídia;
- header com alteração de estado ao rolar;
- transições coerentes, sem animar tudo ao mesmo tempo;
- no máximo um ou dois focos animados por viewport;
- respeitar `prefers-reduced-motion: reduce`;
- sem scroll-jacking;
- sem parallax obrigatório;
- sem autoplay de áudio ou vídeo;
- sem partículas contínuas;
- sem esconder conteúdo essencial durante animações.

## Acessibilidade obrigatória

Atinja o objetivo de WCAG 2.2 AA na medida validável localmente:

- HTML semântico e landmarks;
- foco visível em todos os controles;
- navegação completa por teclado;
- ordem de tabulação coerente com a ordem visual;
- labels reais em formulários;
- `aria-label` em controles somente com ícone;
- `alt` significativo em imagens informativas;
- `aria-hidden` apenas em elementos decorativos;
- contraste de pelo menos 4.5:1 para texto comum;
- targets de toque de pelo menos 44px;
- mensagens de erro próximas ao campo;
- estado de sucesso anunciado de forma acessível;
- foco não encoberto por header ou overlay fixo;
- mídia com controle explícito, legenda quando houver fala e sem autoplay.

Não remova o outline sem fornecer substituto visível.

## Conteúdo, idioma e SEO

- preserve o português existente;
- preserve o inglês existente quando já implementado;
- mantenha textos em estruturas de dados, não espalhados sem necessidade pelos componentes;
- permita expansão de texto sem clipping;
- preserve a preparação para outros idiomas e RTL;
- use title, description, canonical, Open Graph e structured data somente com fatos confirmados;
- não invente URLs ou perfis sociais;
- não coloque segredos no bundle;
- mantenha o site static-first.

## Processo de implementação

### Fase 1 — Diagnóstico

Produza um relatório sem editar:

- stack confirmada;
- arquivos relevantes;
- assets disponíveis;
- diferenças entre as duas referências;
- conteúdo confirmado;
- lacunas;
- problemas do projeto-alvo;
- proposta de arquitetura de componentes.

### Fase 2 — Plano

Crie um plano ordenado com:

- arquivos a criar;
- arquivos a alterar;
- arquivos que não devem ser tocados;
- dependências;
- critérios de aceite;
- comando de validação por etapa.

Pare para aprovação se houver conflito entre PDR, Stitch e código de referência.

### Fase 3 — Fundação

Garanta que o projeto-alvo tenha:

- scripts de lint, typecheck, test e build;
- tokens visuais centralizados;
- estilos globais organizados;
- estrutura de componentes clara;
- testes configurados;
- assets referenciados com caminhos corretos para Vite/base URL.

### Fase 4 — Implementação por fatias

Implemente uma fatia por vez:

1. shell, header e hero;
2. manifesto e música;
3. trajetória;
4. obras, vídeos e CTAs;
5. contato e footer;
6. idioma, responsividade e estados de acessibilidade;
7. refinamento visual e motion.

Após cada fatia, execute o menor conjunto de testes que prove a mudança.

### Fase 5 — QA visual e funcional

Revise em:

```text
320px
360px
375px
390px
430px
768px
1024px
1280px
1440px
```

Verifique especialmente:

- hero;
- header e menu mobile;
- CTAs;
- discografia;
- timeline;
- cards;
- vídeos;
- contato;
- footer;
- nenhuma quebra de texto, botão ou imagem.

### Fase 6 — Bugs

Liste bugs antes de corrigi-los. Para cada bug, registre:

- reprodução;
- comportamento atual;
- comportamento esperado;
- causa;
- severidade;
- correção;
- teste de regressão;
- evidência.

Não marque um bug como corrigido sem reprodução ou teste equivalente.

### Fase 7 — Segurança

Faça uma revisão somente leitura de:

- links externos;
- target/rel;
- formulário;
- exposição de dados pessoais;
- variáveis de ambiente;
- dependências;
- XSS e conteúdo inserido;
- SEO estruturado;
- assets e caminhos públicos.

Não invente uma aprovação de segurança. Declare o que não puder ser validado.

### Fase 8 — Gate final

Execute:

```powershell
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

Depois confira:

- `git diff`;
- arquivos não rastreados;
- assets no `dist`;
- caminhos com `BASE_URL`;
- execução local;
- console do navegador;
- responsividade;
- teclado;
- reduced motion;
- documentação.

Não declare produção validada apenas porque o build passou.

## Restrições de segurança e escopo

- não apagar alterações existentes;
- não fazer commit ou push;
- não publicar ou fazer deploy;
- não instalar banco, backend ou autenticação sem aprovação;
- não abrir, copiar ou exibir credenciais;
- não inventar conteúdo de Wilma Machado;
- não substituir assets oficiais por placeholders sem declarar;
- não introduzir emojis como ícones;
- preferir SVGs semânticos ou ícones já existentes;
- não alterar os dois projetos de referência durante a implementação do Stitch;
- usar os projetos de referência somente como fonte de inspeção, salvo autorização explícita.

## Formato obrigatório da resposta

Ao final de cada fase, informe:

1. fase concluída;
2. arquivos lidos ou alterados;
3. decisões tomadas;
4. evidências;
5. bloqueios;
6. riscos;
7. próxima fase.

Ao final do projeto, separe:

- confirmado e validado;
- validado parcialmente;
- não validado;
- bugs corrigidos;
- riscos aceitos;
- pendências;
- comandos executados e resultados.
