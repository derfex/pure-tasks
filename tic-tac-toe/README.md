# Tic-Tac-Toe

## Declaration

```typescript
declare class MemoryTable {
  constructor(size: number, players: readonly string[]);
    
  makeMove(playerName: string, x: number, y: number): MemoryTableReport;
}

declare type MemoryTableReport =
  | {
      readonly moveIsCorrect: false;
    }
  | {
      readonly gameIsOver: boolean;
      readonly hasWinner: true;
      readonly moveIsCorrect: true;
      readonly winnerName: string;
    }
  | {
      readonly gameIsOver: boolean;
      readonly hasWinner: false;
      readonly moveIsCorrect: true;
    };
```

## Required web technologies

- ECMAScript 2022 (ES13).
- [HTMLScriptElement: defer property](https://html.spec.whatwg.org/multipage/scripting.html#dom-script-defer)
