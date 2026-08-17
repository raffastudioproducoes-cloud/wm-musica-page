# Design System Master — Wilma Machado

## Fonte de verdade e precedência

Este é o ponto de entrada obrigatório do design system do projeto.

A especificação global aprovada permanece em `../LandPageWilmaPrototipo/MASTER.md`. Ela define os tokens, tipografia, espaçamento, componentes, acessibilidade, motion, política de assets e checklist de verificação que devem ser usados neste projeto.

Nenhuma página pode substituir a identidade global. Um arquivo em `pages/` pode apenas especializar layout, prioridade de conteúdo e comportamento da página correspondente, sem criar ou trocar cores, fontes, logos, ícones ou assets oficiais.

## Regras globais vinculantes

- Direção: Premium Editorial / Minimalist-Tactile, serena, humana e cultural.
- Tipografia: `Bodoni Moda` para display e títulos; `Hanken Grotesk` para corpo e interface.
- Cores: somente tokens aprovados na especificação global vinculada.
- Assets: somente materiais explicitamente aprovados; não gerar, substituir ou presumir ativos oficiais.
- Interação: todo controle deve possuir foco visível, operação por teclado e estados explícitos.
- Motion: sutil, opcional e compatível com `prefers-reduced-motion`.
- Acessibilidade: contraste mínimo AA para texto normal, labels reais, `alt` adequado e nenhum destino falso.

## Ordem de aplicação

1. Este master e a especificação global vinculada;
2. `pages/<nome-da-pagina>.md`, quando existir;
3. Regras de implementação compatíveis com os dois níveis anteriores.

Em caso de conflito, a regra específica prevalece somente dentro da página identificada, desde que não contrarie os tokens, a marca, a acessibilidade e a política de assets globais.
