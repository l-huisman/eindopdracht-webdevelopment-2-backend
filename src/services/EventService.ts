import {EventResponseDTO} from "../dtos/EventResponseDTO";
import EventRepository from "../repositories/EventRepository";
import {EventRequestDTO} from "../dtos/EventRequestDTO";

export class EventService {
    private readonly eventRepository: EventRepository;

    constructor() {
        this.eventRepository = new EventRepository();
    }

    public async getEvent(id: number): Promise<EventResponseDTO> {
        const data: any = await this.eventRepository.getEvent(id);
        return this.mapDataToEventResponseDTO(data);
    }

    public async getEvents(): Promise<EventResponseDTO[]> {
        const data: any = await this.eventRepository.getEvents();
        return this.mapDataToEventResponseDTOs(data)
    }

    public async getEventsByDate(date: string): Promise<EventResponseDTO[]> {
        // The data in the date parameter is in the format YYYY-Weeknumber
        const dateParts = date.split("-");
        const year = parseInt(dateParts[0]);
        const weekNumber = parseInt(dateParts[1]);

        // Calculate the first day of the week
        const firstDayOfWeek = new Date(year, 0, 1 + (weekNumber - 1) * 7);
        const lastDayOfWeek = new Date(year, 0, 1 + weekNumber * 7 - 1);

        // Get all events for the week
        const data: any = await this.eventRepository.getEventsByDate(firstDayOfWeek, lastDayOfWeek);
        return this.mapDataToEventResponseDTOs(data)
    }

    public async getEventsByGroup(groupId: number): Promise<EventResponseDTO[]> {
        const data: any = await this.eventRepository.getEventsByGroup(groupId);
        return this.mapDataToEventResponseDTOs(data)
    }

    public async getEventsByUser(userId: number): Promise<EventResponseDTO[]> {
        const data: any = await this.eventRepository.getEventsByUser(userId);
        return this.mapDataToEventResponseDTOs(data)
    }

    private extractEventDetails(request: EventRequestDTO): { name: string, description: string, date: Date, startTime: number, endTime: number, groupId: number, userId: number } {
        const { eventName: name, eventDescription: description, day, month, year, startTime, endTime, groupId, userId } = request;
        const date = new Date(year, month - 1, day);
        return { name, description, date, startTime, endTime, groupId, userId };
    }

    public async createEvent(request: EventRequestDTO): Promise<void> {
        const { name, description, date, startTime, endTime, groupId, userId } = this.extractEventDetails(request);
        await this.eventRepository.createEvent(name, description, date, startTime, endTime, groupId, userId);
    }

    public async updateEvent(id: number, request: EventRequestDTO): Promise<void> {
        const { name, description, date, startTime, endTime, groupId } = this.extractEventDetails(request);
        await this.eventRepository.updateEvent(id, name, description, date, startTime, endTime, groupId);
    }

    public async deleteEvent(id: number): Promise<void> {
        await this.eventRepository.deleteEvent(id);
    }

    private mapDataToEventResponseDTO(data: any): EventResponseDTO {
        return new EventResponseDTO(
            data.name,
            data.description,
            data.date,
            data.start_time,
            data.end_time,
            data.group_id,
            data.user_id
        );
    }

    private mapDataToEventResponseDTOs(data: any): EventResponseDTO[] {
        return data.map((event: any) => {
            return new EventResponseDTO(
                event.name,
                event.description,
                event.date,
                event.start_time,
                event.end_time,
                event.group_id,
                event.user_id
            );
        });
    }
}