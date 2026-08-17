<div align="center">

# Wilma Machado

### Landing page editorial para música, palavra e fé.

![Status](https://img.shields.io/badge/status-prot%C3%B3tipo-7C580A)
![Stack](https://img.shields.io/badge/stack-HTML%20est%C3%A1tico-1E1B1A)
![Styling](https://img.shields.io/badge/estilo-Tailwind%20CSS%20via%20CDN-B58A3C)
![Language](https://img.shields.io/badge/idioma-pt--BR-685D46)
![Design System](https://img.shields.io/badge/design%20system-editorial%20sereno-4F4538)

</div>

---

## Sumário

1. [Apresentação](#apresentação)
2. [Objetivo](#objetivo)
3. [Públicos](#públicos)
4. [Experiência e conteúdo](#experiência-e-conteúdo)
5. [Stack e estado técnico](#stack-e-estado-técnico)
6. [Design system](#design-system)
7. [Estrutura do projeto](#estrutura-do-projeto)
8. [Assets disponíveis](#assets-disponíveis)
9. [Acessibilidade e qualidade](#acessibilidade-e-qualidade)
10. [Execução local](#execução-local)
11. [Estado atual e pendências](#estado-atual-e-pendências)
12. [Documentação](#documentação)

---

## Apresentação

**Wilma Machado** é o protótipo de uma landing page oficial para apresentar a
atuação artística de Wilma Machado como cantora, compositora e escritora cristã.

O projeto reúne uma narrativa editorial sobre música, palavra, fé, trajetória,
obras, projetos, apresentações e canais profissionais de contato. A interface
deve transmitir serenidade, humanidade e elegância, sem estética religiosa
caricatural, catálogo comercial agressivo ou aparência de dashboard.

**Estado atual:** protótipo visual estático, ainda sem implementação publicável
ou destinos externos confirmados.

## Objetivo

Oferecer uma presença digital institucional e artística que permita ao visitante:

- descobrir a música de Wilma Machado;
- conhecer sua trajetória e produção autoral;
- acessar obras e projetos quando houver destinos confirmados;
- manifestar interesse em apresentações, eventos e atividades em igrejas;
- consultar músicas inéditas e possibilidades de licenciamento por canal profissional;
- encontrar conteúdos de vídeo e futuras plataformas oficiais sem links fictícios.

## Públicos

- Ouvintes e pessoas chegando por busca, música ou vídeo;
- Comunidade cristã, igrejas, ministérios e eventos;
- Contratantes interessados em apresentações;
- Artistas, cantores e produtores buscando composições inéditas;
- Pessoas interessadas na trajetória, escrita e projetos da artista.

## Experiência e conteúdo

A primeira versão é uma landing page longa, orientada por seções e navegação por
âncoras.

| Seção | Finalidade | Estado atual |
| --- | --- | --- |
| Hero | Apresentar Wilma Machado, descritor e ações principais | Protótipo visual disponível |
| Manifesto | Conectar música, palavra e fé | Protótipo visual disponível |
| Discografia | Destacar o álbum *Pelas ruas do Rio* | Conteúdo e capa disponíveis; destinos pendentes |
| Trajetória | Contar marcos de forma editorial | Estrutura visual disponível; fatos precisam de validação final |
| Obras e projetos | Apresentar literatura, projetos e iniciativas | Estrutura visual disponível; destinos pendentes |
| Vídeos | Organizar conteúdos audiovisuais | Previsto; sem canal ou URLs confirmados |
| Músicas inéditas | Direcionar consultas profissionais | Estrutura visual disponível; fluxo de contato pendente |
| Apresentações | Direcionar convites e agenda | Estrutura visual disponível; fluxo de contato pendente |
| Contato e footer | Disponibilizar canais oficiais e informações institucionais | Destinos e dados públicos pendentes de confirmação |

## Stack e estado técnico

O estado confirmado neste diretório é:

- **HTML estático** em `LandPageWilmaPrototipo/code.html`;
- **Tailwind CSS via CDN**, com configuração declarada inline;
- **JavaScript nativo mínimo** para alteração visual do header ao rolar;
- **Google Fonts** para `Bodoni Moda` e `Hanken Grotesk`;
- **Material Symbols** no protótipo atual;
- sem `package.json`, React, TypeScript, Vite, build configurado ou suíte de testes;
- sem repositório Git neste diretório no momento da documentação.

Não presumir React/Vite nem executar instalação de dependências antes de uma
decisão técnica explícita.

## Design system

O ponto de entrada é [design-system/MASTER.md](design-system/MASTER.md). Ele
estabelece a precedência das regras e vincula a especificação global aprovada em
[LandPageWilmaPrototipo/MASTER.md](LandPageWilmaPrototipo/MASTER.md).

### Direção de marca

**Premium Editorial / Minimalist-Tactile**: uma experiência semelhante a uma
publicação cultural cuidadosamente editada, com superfícies quentes, tipografia
editorial, espaço negativo e movimento mínimo.

### Tokens principais aprovados

| Papel | Token | Valor |
| --- | --- | --- |
| Canvas principal | `surface` | `#fff8f6` |
| Card claro | `surface-container-lowest` | `#ffffff` |
| Texto principal | `on-surface` | `#1e1b1a` |
| Texto secundário | `on-surface-variant` | `#4f4538` |
| Dourado de ênfase | `primary` | `#7c580a` |
| Fundo de CTA | `primary-container` | `#b58a3c` |
| Texto sobre CTA dourado | `on-primary-container` | `#3a2600` |
| Seção de conversão | `inverse-surface` | `#33302f` |
| Destaque sobre fundo escuro | `inverse-primary` | `#f0bf6b` |

### Tipografia aprovada

- **Bodoni Moda:** hero, títulos, obras, destaques e trechos editoriais;
- **Hanken Grotesk:** texto corrido, navegação, labels, controles e metadados.

### Regras obrigatórias

- Não criar ou trocar logos, cores, fontes, ícones ou assets oficiais;
- Não usar branco sobre `primary-container` para labels de CTA: a combinação não atende AA;
- Usar `on-primary-container` sobre o fundo dourado;
- Manter movimento sutil e compatível com `prefers-reduced-motion`;
- Não usar links `#`, ações falsas ou placeholders como conteúdo final;
- Regras em `design-system/pages/<pagina>.md` só prevalecem dentro da página correspondente.

## Estrutura do projeto

```text
WMMusicaPage/
├── design-system/
│   ├── MASTER.md                         # entrada e precedência do design system
│   └── pages/
│       └── dashboard.md                  # override restrito a futura página dashboard
├── LandPageWilmaPrototipo/
│   ├── code.html                         # protótipo principal em HTML/Tailwind
│   ├── MASTER.md                         # especificação global aprovada
│   ├── PDR.docx                          # documento de requisitos de design
│   ├── PROMPT_ESTRUTURACAO_SITE_UI_UX_PRO_MAX.md
│   ├── modern_serene/DESIGN.md           # variante visual histórica
│   ├── animated_svg/code.html            # experimento de linha SVG
│   ├── shader/code.html                  # experimento WebGL; não é base aprovada
│   └── <assets de imagem>
└── README.md
```

## Assets disponíveis

Os arquivos abaixo estão presentes localmente. A existência do arquivo não
autoriza automaticamente seu uso editorial: posicionamento, crop e contexto
devem respeitar o design system e a aprovação do projeto.

| Asset | Possível uso | Estado |
| --- | --- | --- |
| `home-studio-wm-18-agosto-2024.jpg` | Hero, estúdio ou música | Disponível localmente |
| `wilma-trabalhando-set-2015.jpg` | Trajetória e contexto artístico | Disponível localmente |
| `culto-em-casa-joice-2017.jpg` | Trajetória ou apresentação | Disponível localmente |
| `pelas-ruas-do-rio-capa.png` | Destaque de discografia | Disponível localmente |
| `raffastudio-logo.png` | Crédito institucional, se aprovado | Disponível localmente |
| `screen.png` | Referência da composição do protótipo | Disponível localmente |

## Acessibilidade e qualidade

A implementação futura deve buscar WCAG 2.2 AA na medida validável localmente.

- Estrutura semântica com skip link, `header`, `nav`, `main` e `footer`;
- Hierarquia de headings sequencial;
- Foco visível em todo link, botão, controle e item de menu;
- Menu mobile operável por teclado, com `aria-expanded`, Escape e retorno do foco;
- Imagens informativas com `alt` real; imagens decorativas com `alt=""`;
- Alvos de toque de pelo menos 44px quando aplicável;
- Estados explícitos de loading, erro, indisponibilidade e vazio;
- Sem autoplay de áudio ou vídeo;
- Sem informação comunicada apenas por cor;
- Sem overflow horizontal em 320px, 360px, 375px, 390px, 430px, 768px, 1024px, 1280px e 1440px;
- Conteúdo integralmente disponível com reduced motion.

## Execução local

Não há servidor, build ou testes configurados no estado atual do projeto.

Para inspeção visual do protótipo estático, abra `LandPageWilmaPrototipo/code.html`
em um navegador local. Essa inspeção não constitui validação de produção,
acessibilidade, performance, deploy ou comportamento em dispositivos reais.

## Estado atual e pendências

### Confirmado

- Direção de marca, tokens e tipografia documentados;
- Estrutura visual da landing disponível em protótipo;
- Capa de *Pelas ruas do Rio* e fotografias locais presentes;
- Design system global e estrutura de overrides documentados.

### Pendente de confirmação ou implementação

- Stack final e estrutura do projeto implementável;
- URLs oficiais de plataformas, vídeos, redes e contatos;
- Dados biográficos e datas exibidos na timeline;
- Ações de música, agenda, licenciamento e formulário de contato;
- Política de privacidade, termos e informações institucionais publicáveis;
- Substituição de placeholders e `data-alt` por assets e `alt` finais;
- Testes de teclado, reduced motion, responsividade e navegadores;
- Build, deploy, domínio, SEO técnico e analytics, se forem aprovados.

## Documentação

| Documento | Conteúdo |
| --- | --- |
| [README](README.md) | Visão geral, estado técnico, estrutura e critérios de qualidade |
| [Design system](design-system/MASTER.md) | Entrada, governança e precedência das regras de interface |
| [Master global do protótipo](LandPageWilmaPrototipo/MASTER.md) | Tokens, componentes, acessibilidade, motion e política de assets |
| [PDR de design](LandPageWilmaPrototipo/PDR.docx) | Visão, arquitetura de conteúdo e requisitos editoriais |
| [Prompt de estruturação](LandPageWilmaPrototipo/PROMPT_ESTRUTURACAO_SITE_UI_UX_PRO_MAX.md) | Processo planejado para futura implementação |

---

Documentação criada a partir do estado local verificado do projeto. Não representa
aprovação de publicação, fatos externos, URLs, contatos ou integrações ainda não
confirmados.
