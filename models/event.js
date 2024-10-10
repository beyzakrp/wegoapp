 class Event {
    constructor(
        id,
        title,
        profileImage,
        eventImage,
        username,
        reminder,
        fullCapacity,
        enrolled,
        description,
        hour,
        date,
        location,
        participants,
        isLike,
        

    ) {
        this.id = id ;
        this.title = title;
        this.eventImage =eventImage;
        this.profileImage = profileImage;
        this.username = username;
        this.reminder = reminder;
        this.fullCapacity = fullCapacity;
        this.enrolled = enrolled;
        this.description =description;
        this.hour = hour;
        this.date = date;
        this.location = location;
        this.participants = participants;
        this.isLike = isLike;

    }
 }
 export default Event;