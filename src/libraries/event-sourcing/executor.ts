import type { Decider } from './decider';
import type { EventStore } from './event-store';

export const executor =
  <TCommand, TState, TEvents>(decider: Decider<TCommand, TState, TEvents>) =>
  (eventStore: EventStore<TEvents>) =>
  async (command: TCommand): Promise<void> => {
    const history: TEvents[] = await eventStore.load();
    await eventStore.save(
      decider.decide(decider.project(history)(decider.initialState))(command),
    );
  };
