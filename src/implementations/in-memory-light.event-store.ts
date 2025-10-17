import type { LightEvent } from '@/domain';
import type { EventStore } from '@/libraries/event-sourcing';

export const inMemoryLightEventStore = (): EventStore<LightEvent> => {
  let history: LightEvent[] = [];

  return {
    load: async () => history,
    save: async (events: LightEvent[]) => {
      history = [...history, ...events];
    },
  };
};
