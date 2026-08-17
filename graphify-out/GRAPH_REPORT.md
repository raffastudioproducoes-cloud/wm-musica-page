# Graph Report - WMMusicaPage  (2026-08-17)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 83 nodes · 76 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0deeeef4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `scripts` - 6 edges
3. `lib` - 4 edges
4. `App()` - 3 edges
5. `getCopy()` - 2 edges
6. `eslint` - 2 edges
7. `@eslint/js` - 2 edges
8. `jsdom` - 2 edges
9. `@testing-library/jest-dom` - 2 edges
10. `@testing-library/react` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (14 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (19): eslint, @eslint/js, jsdom, devDependencies, eslint, @eslint/js, jsdom, @testing-library/jest-dom (+11 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (16): src, compilerOptions, allowJs, allowSyntheticDefaultImports, esModuleInterop, isolatedModules, jsx, module (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (10): name, private, scripts, build, dev, lint, test, typecheck (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.22
Nodes (9): dependencies, react, react-dom, vite, @vitejs/plugin-react, react, react-dom, vite (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.32
Nodes (6): Copy, en, getCopy(), Locale, pt, supportedLocales

### Community 5 - "Community 5"
Cohesion: 0.50
Nodes (4): DOM, DOM.Iterable, ES2022, lib

## Knowledge Gaps
- **46 isolated node(s):** `Copy`, `Locale`, `eslint`, `@eslint/js`, `jsdom` (+41 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 0` to `Community 2`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 3` to `Community 2`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Community 1` to `Community 5`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **What connects `Copy`, `Locale`, `eslint` to the rest of the system?**
  _46 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._