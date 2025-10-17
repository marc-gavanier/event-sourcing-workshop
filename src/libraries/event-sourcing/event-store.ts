export type EventStore<T> = {
  load: () => Promise<T[]>;
  save: (event: T[]) => Promise<void>;
};
