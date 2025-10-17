import { describe, expect, it } from 'vitest';
import {
  BROKEN,
  decide,
  type LightState,
  OFF,
  ON,
  project,
  TURN_OFF,
  TURN_ON,
} from './light';

describe('light', (): void => {
  it('is off, switch on and decrement state', (): void => {
    const state: LightState = [5, OFF];

    const newState: LightState = project(decide(state)(TURN_ON))(state);

    expect(newState).toEqual([4, ON]);
  });

  it('is off, switch off and do nothing', (): void => {
    const state: LightState = [5, OFF];

    const newState: LightState = project(decide(state)(TURN_OFF))(state);

    expect(newState).toEqual([5, OFF]);
  });

  it('is on, switch on and do nothing', (): void => {
    const state: LightState = [5, ON];

    const newState: LightState = project(decide(state)(TURN_ON))(state);

    expect(newState).toEqual([5, ON]);
  });

  it('is on, switch off and decrement state', (): void => {
    const state: LightState = [4, OFF];

    const newState: LightState = project(decide(state)(TURN_OFF))(state);

    expect(newState).toEqual([4, OFF]);
  });

  it('breaks when switch on and number of use left is 0', () => {
    const state: LightState = [0, OFF];

    const newState: LightState = project(decide(state)(TURN_ON))(state);

    expect(newState).toEqual(BROKEN);
  });
});
