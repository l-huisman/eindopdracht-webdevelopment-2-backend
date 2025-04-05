import {Request, Response} from "express";
import APIResponseDTO from "../dtos/APIResponseDTO";
import {EventNotFoundException} from "../exceptions/EventNotFoundException";
import {EventCreationException} from "../exceptions/EventCreationException";
import {EventService} from "../services/EventService";
import {EventResponseDTO} from "../dtos/EventResponseDTO";
import {EventRequestDTO} from "../dtos/EventRequestDTO";
import BaseController from "./BaseController";
import {NotImplementedException} from "../exceptions/NotImplementedException";

export default class EventController extends BaseController {
    private readonly eventService: EventService;

    constructor() {
        super();
        this.eventService = new EventService();
    }

    public async getEvent(req: Request, res: Response): Promise<void> {
        try {
            const eventId: number = parseInt(req.params.id);
            const event: EventResponseDTO = await this.eventService.getEvent(eventId);
            const apiResponse = new APIResponseDTO<EventResponseDTO>("Success", event, undefined);
            res.status(200).json(apiResponse);
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, EventNotFoundException);
            res.status(statusCode).json(apiResponse);
        }
    }

    public async getEvents(req: Request, res: Response): Promise<void> {
        try {
            const events: EventResponseDTO[] = await this.eventService.getEvents();
            const apiResponse = new APIResponseDTO<EventResponseDTO[]>("Success", events, undefined);
            res.status(200).json(apiResponse);
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, EventNotFoundException);
            res.status(statusCode).json(apiResponse);
        }
    }

    public async getEventsByDate(req: Request, res: Response): Promise<void> {
        try {
            const date: string = req.params.date;
            const events: EventResponseDTO[] = await this.eventService.getEventsByDate(date);
            const apiResponse = new APIResponseDTO<EventResponseDTO[]>("Success", events, undefined);
            res.status(200).json(apiResponse);
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, EventNotFoundException);
            res.status(statusCode).json(apiResponse);
        }
    }

    public async getEventsByGroup(req: Request, res: Response): Promise<void> {
        try {
            const groupId: number = parseInt(req.params.groupId);
            const events: EventResponseDTO[] = await this.eventService.getEventsByGroup(groupId);
            const apiResponse = new APIResponseDTO<EventResponseDTO[]>("Success", events, undefined);
            res.status(200).json(apiResponse);
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, EventNotFoundException);
            res.status(statusCode).json(apiResponse);
        }
    }

    public async getEventsByUser(req: Request, res: Response): Promise<void> {
        try {
            const userId: number = parseInt(req.params.userId);
            const events: EventResponseDTO[] = await this.eventService.getEventsByUser(userId);
            const apiResponse = new APIResponseDTO<EventResponseDTO[]>("Success", events, undefined);
            res.status(200).json(apiResponse);
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, EventNotFoundException);
            res.status(statusCode).json(apiResponse);
        }
    }

    public async getEventsByGroupAndDate(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("getEventsByGroupAndDate method not implemented", 501);
    }

    public async postEvent(req: Request, res: Response): Promise<void> {
        try {
            await this.eventService.createEvent(req.body as EventRequestDTO);
            res.status(201).send();
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, EventCreationException);
            res.status(statusCode).json(apiResponse);
        }
    }

    public async putEvent(req: Request, res: Response): Promise<void> {
        try {
            const eventId: number = parseInt(req.params.id);
            await this.eventService.updateEvent(eventId, req.body as EventRequestDTO);
            res.status(200).send();
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, EventNotFoundException);
            res.status(statusCode).json(apiResponse);
        }
    }

    public async deleteEvent(req: Request, res: Response): Promise<void> {
        try {
            const eventId: number = parseInt(req.params.id);
            await this.eventService.deleteEvent(eventId);
            res.status(204).send();
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, EventNotFoundException);
            res.status(statusCode).json(apiResponse);
        }
    }
}