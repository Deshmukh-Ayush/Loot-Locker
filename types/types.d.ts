import { Connections } from "mongoose";

declare global {
  var mongoose: {
    conn: Connections | null;
    promise: Promise<Connections> | null;
  };
}

export {};
