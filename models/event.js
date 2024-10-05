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
        

    ) {
        this.id = id ;
        this.title = title;
        this.eventImage =eventImage;
        this.profileImage = profileImage;
        this.username = username;
        this.reminder = reminder;
        this.fullCapacity = fullCapacity;
        this.enrolled = enrolled;

    }
 }
 export default Event;