export class EventResponseDTO {
    name: string;
    description: string;
    day: number;
    month: number;
    year: number;
    start_time: number;
    end_time: number;
    group_id: number;
    user_id: number;

    constructor(name: string, description: string, date: Date, start_time: number, end_time: number, group_id: number, user_id: number) {
        this.name = name;
        this.description = description;
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.start_time = start_time;
        this.end_time = end_time;
        this.group_id = group_id;
        this.user_id = user_id;
    }
}