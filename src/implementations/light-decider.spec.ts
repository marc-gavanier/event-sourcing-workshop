import { describe, expect, it } from 'vitest';
import {
  INITIAL_STATE,
  type LightCommand,
  type LightEvent,
  ON,
  project,
  TURN_OFF,
  TURN_ON,
} from '@/domain';
import { inMemoryLightEventStore } from '@/implementations';
import { type EventStore, executor } from '@/libraries/event-sourcing';
import { lightDecider } from './light-decider';

describe('light', (): void => {
  it('retrieves events from in event store and project curent state', async () => {
    const inMemoryEventStore: EventStore<LightEvent> =
      inMemoryLightEventStore();

    const execute: (command: LightCommand) => Promise<void> =
      executor(lightDecider)(inMemoryEventStore);

    await execute(TURN_ON);
    await execute(TURN_OFF);
    await execute(TURN_ON);

    const events = await inMemoryEventStore.load();

    expect(project(events)(INITIAL_STATE)).toEqual([3, ON]);
  });
});
