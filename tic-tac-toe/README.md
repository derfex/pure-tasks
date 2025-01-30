# Tic-Tac-Toe

## Declaration

```typescript
declare class MemoryTable {
  constructor(size: number, players: readonly string[]);

  public makeMove(playerName: string, x: number, y: number): MemoryTableReport;
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


declare class PlayerList<P> {
  constructor(players: readonly P[]);

  public getNext(): P;
  public revert(): void;
}
```

## Required web technologies

- ECMAScript 2022 (ES13).
- [HTMLScriptElement: defer property](https://html.spec.whatwg.org/multipage/scripting.html#dom-script-defer)
