import { match, P } from 'ts-pattern';

export const ON = 'on' as const;
export const OFF = 'off' as const;

export const TURN_ON = 'turnOn' as const;
export const TURN_OFF = 'turnOff' as const;
export type LightCommand = typeof TURN_ON | typeof TURN_OFF;

const SWITCHED_ON = 'switchedOn' as const;
const SWITCHED_OFF = 'switchedOff' as const;
const BROKE = 'broken' as const;

type UsesLeftCount = number;

type BrokenLightState = symbol;

type WorkingLightState = [UsesLeftCount, typeof ON | typeof OFF];

export type LightState = WorkingLightState | BrokenLightState;

export type LightEvent =
  | typeof SWITCHED_ON
  | typeof SWITCHED_OFF
  | typeof BROKE;

export const INITIAL_STATE: LightState = [5, OFF];

export const BROKEN: BrokenLightState = Symbol('broken');

const WorkingState = (workingState: WorkingLightState): WorkingLightState =>
  workingState;

const noUsesLeft = (n: number) => n <= 0;

export const decide =
  (state: LightState) =>
  (cmd: LightCommand): LightEvent[] =>
    match<[LightState, LightCommand]>([state, cmd])
      .with([[P.when(noUsesLeft), P._], TURN_ON], () => [BROKE])
      .with([[P._, OFF], TURN_ON], () => [SWITCHED_ON])
      .with([[P._, ON], TURN_OFF], () => [SWITCHED_OFF])
      .otherwise(([_]) => []);

export const project =
  (events: LightEvent[]) =>
  (state: LightState): LightState =>
    events.reduce(
      (newState, event): LightState =>
        match<[LightState, LightEvent]>([newState, event])
          .with([[P._, P._], BROKE], () => BROKEN)
          .with([[P.select('nb'), P._], SWITCHED_ON], ({ nb }) =>
            WorkingState([nb - 1, ON]),
          )
          .with([[P.select('nb'), P._], SWITCHED_OFF], ({ nb }) =>
            WorkingState([nb, OFF]),
          )
          .otherwise(([s]) => s),
      state,
    );
