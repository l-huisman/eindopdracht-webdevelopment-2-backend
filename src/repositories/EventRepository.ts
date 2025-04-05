import {BaseRepository} from "./BaseRepository";
import {EventCreationException} from "../exceptions/EventCreationException";
import {EventsNotFoundException} from "../exceptions/EventsNotFoundException";

export default class EventRepository extends BaseRepository {

    public async getEvent(id: number): Promise<any> {
        try {
            const query = "SELECT `name`, `description`, `date`, `start_time`, `end_time`, `group_id`, `user_id` FROM `events` WHERE id = ?";
            const params = [id];
            const result = await this.executeQuery<any[]>(query, params);
            if (result.length === 0) {
                throw new EventsNotFoundException(`Event with id ${id} not found in the database`, 404);
            }
            return result[0];
        } catch (error) {
            throw new EventsNotFoundException(`Event with id ${id} not found`, 404, error as Error);
        }
    }

    public async getEvents(): Promise<any[]> {
        try {
            const query = "SELECT `name`, `description`, `date`, `start_time`, `end_time`, `group_id`, `user_id` FROM `events`";
            const result = await this.executeQuery<any[]>(query);
            if (result.length === 0) {
                throw new EventsNotFoundException("Events not found in the database", 404);
            }
            return result;
        } catch (error) {
            throw new EventsNotFoundException("Events not found in the database", 404, error as Error);
        }
    }

    public async getEventsByDate(firstDayOfTheWeek: Date, lastDayOfTheWeek: Date): Promise<any[]> {
        try {
            const query = "SELECT `name`, `description`, `date`, `start_time`, `end_time`, `group_id`, `user_id` FROM `events` WHERE date BETWEEN ? AND ?";
            const params = [firstDayOfTheWeek.toISOString().slice(0, 10), lastDayOfTheWeek.toISOString().slice(0, 10)];
            const result = await this.executeQuery<any[]>(query, params);
            if (result.length === 0) {
                throw new EventsNotFoundException("Events not found in the database", 404);
            }
            return result;
        } catch (error) {
            throw new EventsNotFoundException("Events not found in the database", 404, error as Error);
        }
    }

    public async getEventsByGroup(groupId: number): Promise<any[]> {
        try {
            const query = "SELECT `name`, `description`, `date`, `start_time`, `end_time`, `group_id`, `user_id` FROM `events` WHERE group_id = ?";
            const params = [groupId];
            const result = await this.executeQuery<any[]>(query, params);
            if (result.length === 0) {
                throw new EventsNotFoundException(`Events with group id ${groupId} not found in the database`, 404);
            }
            return result;
        } catch (error) {
            throw new EventsNotFoundException(`Events with group id ${groupId} not found`, 404, error as Error);
        }
    }

    public async getEventsByUser(userId: number): Promise<any[]> {
        try {
            const query = "SELECT `name`, `description`, `date`, `start_time`, `end_time`, `group_id`, `user_id` FROM `events` WHERE user_id = ?";
            const params = [userId];
            const result = await this.executeQuery<any[]>(query, params);
            if (result.length === 0) {
                throw new EventsNotFoundException(`Events with user id ${userId} not found in the database`, 404);
            }
            return result;
        } catch (error) {
            throw new EventsNotFoundException(`Events with user id ${userId} not found`, 404, error as Error);
        }
    }

    public async createEvent(name: string, description: string, date: Date, startTime: number, endTime: number, groupId: number, userId: number): Promise<void> {
        try {
            const query: string = "INSERT INTO `events` (`name`, `description`, `date`, `start_time`, `end_time`, `group_id`, `user_id`) VALUES (?, ?, ?, ?, ?, ?, ?)";
            const params: (string | number)[] = [name, description, date.toISOString().slice(0, 10), startTime, endTime, groupId, userId];
            await this.executeQuery(query, params);
        } catch (error) {
            throw new EventCreationException("Error creating event", 500, error as Error);
        }
    }

    public async updateEvent(id: number, name: string, description: string, date: Date, startTime: number, endTime: number, groupId: number): Promise<void> {
        try {
            const query: string = "UPDATE `events` SET `name` = ?, `description` = ?, `date` = ?, `start_time` = ?, `end_time` = ?, `group_id` = ? WHERE id = ?";
            const params: (string | number)[] = [name, description, date.toISOString().slice(0, 10), startTime, endTime, groupId, id];
            await this.executeQuery(query, params);
        } catch (error) {
            throw new EventCreationException("Error updating event", 500, error as Error);
        }
    }

    public async deleteEvent(id: number): Promise<void> {
        try {
            const query = "DELETE FROM `events` WHERE id = ?";
            const params = [id];
            await this.executeQuery(query, params);
        } catch (error) {
            throw new EventsNotFoundException(`Event with id ${id} not found`, 404, error as Error);
        }
    }
}
