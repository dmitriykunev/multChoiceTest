import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { ClientsService } from "./clients.service";
import { Client } from "./client.entity";

@Controller("clients")
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get("all")
  async findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get("new")
  async findNew(): Promise<Client[]> {
    return this.clientsService.findNew();
  }

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    await this.clientsService.create(createClientDto);
  }
}
