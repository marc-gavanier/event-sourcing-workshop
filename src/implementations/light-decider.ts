import {
  BROKEN,
  decide,
  INITIAL_STATE,
  type LightCommand,
  type LightEvent,
  type LightState,
  project,
} from '@/domain';
import type { Decider } from '@/libraries/event-sourcing';

export const lightDecider: Decider<LightCommand, LightState, LightEvent> = {
  decide,
  project,
  initialState: INITIAL_STATE,
  isTerminal: (state): boolean => state === BROKEN,
};
