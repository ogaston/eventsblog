export interface IEvent {
    id: Number
    name: String
    date: Date
    time: String
    price: Number
    imageUrl: String
    location?: {
        address: String
        city: String
        country: String
    },
    onlineUrl?: String,
    sessions: ISession[]
}

export interface ISession {
    id: Number
    name: String
    presenter: String
    duration: Number
    level: String
    abstract: String
    voters: String[]
}