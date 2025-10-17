export type Decider<TCommand, TState, TEvent> = {
  decide: (state: TState) => (command: TCommand) => TEvent[];
  project: (events: TEvent[]) => (state: TState) => TState;
  initialState: TState;
  isTerminal: (state: TState) => boolean;
};
