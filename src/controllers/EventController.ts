import {Request, Response} from "express";
import APIResponseDTO from "../dtos/APIResponseDTO";
import {EventNotFoundException} from "../exceptions/EventNotFoundException";
import {EventCreationException} from "../exceptions/EventCreationException";
import {EventService} from "../services/EventService";
import {EventResponseDTO} from "../dtos/EventResponseDTO";
import {EventRequestDTO} from "../dtos/EventRequestDTO";
import BaseController from "./BaseController";

export default class EventController extends BaseController {
    private readonly eventService: EventService;

    constructor() {
        super();
        this.eventService = new EventService();
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

    public async postEvent(req: Request, res: Response): Promise<void> {
        try {
            await this.eventService.createEvent(req.body as EventRequestDTO);
            res.status(201).send();
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, EventCreationException);
            res.status(statusCode).json(apiResponse);
        }
    }


}