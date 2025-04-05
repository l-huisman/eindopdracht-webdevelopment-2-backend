import {EventResponseDTO} from "../dtos/EventResponseDTO";
import EventRepository from "../repositories/EventRepository";
import {EventRequestDTO} from "../dtos/EventRequestDTO";

export class EventService {
    private readonly eventRepository: EventRepository;

    constructor() {
        this.eventRepository = new EventRepository();
    }

    public async getEvents(): Promise<EventResponseDTO[]> {
        const data: any = await this.eventRepository.getEvents();
        return this.mapDataToEventResponseDTO(data)
    }

    public async createEvent(request: EventRequestDTO): Promise<void> {
        const name = request.eventName;
        const description = request.eventDescription;
        const day = request.day;
        const month = request.month;
        const year = request.year;
        const startTime = request.startTime;
        const endTime = request.endTime;
        const groupId = request.groupId;
        const userId = request.userId;

        const date = new Date(year, month - 1, day);

        await this.eventRepository.createEvent(name, description, date, startTime, endTime, groupId, userId);
    }

    private mapDataToEventResponseDTO(data: any): EventResponseDTO[] {
        throw new Error("Method not implemented.");
    }
}