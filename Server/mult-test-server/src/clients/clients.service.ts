import { Injectable, Inject } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { Client } from "./client.entity";

@Injectable()
export class ClientsService {
  constructor(
    @Inject("CLIENTS_REPOSITORY")
    private readonly clientsRepository: typeof Client
  ) {}

  async findAll(): Promise<Client[]> {
    return this.clientsRepository.findAll<Client>();
  }

  async findNew(): Promise<Client[]> {
    return this.clientsRepository.findAll<Client>({
      where: {
        note: null
      }
    });
  }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = new Client();
    client.username = createClientDto.username;
    client.phone = createClientDto.phone;
    client.level = createClientDto.level;
    client.result = createClientDto.result;
    client.note = createClientDto.note;
    return client.save();
  }
}
