import { Client } from "./client.entity";

export const clientsProviders = [
  {
    provide: "CLIENTS_REPOSITORY",
    useValue: Client
  }
];
