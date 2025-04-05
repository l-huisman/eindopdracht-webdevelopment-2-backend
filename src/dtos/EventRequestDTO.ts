export class EventRequestDTO {
    public day: number;
    public month: number;
    public year: number;
    public eventName: string;
    public eventDescription: string;
    public startTime: number;
    public endTime: number;
    public groupId: number;
    public userId: string;

    constructor(
        day: number,
        month: number,
        year: number,
        eventName: string,
        eventDescription: string,
        startTime: number,
        endTime: number,
        groupId: number,
        userId: string
    ) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.eventName = eventName;
        this.eventDescription = eventDescription;
        this.startTime = startTime;
        this.endTime = endTime;
        this.groupId = groupId;
        this.userId = userId;
    }
}