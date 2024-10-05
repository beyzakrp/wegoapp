class User {
    constructor (
        id,
        username,
        name,
        surname,
        mail,
        eduMail,
        country,
        phone,
        birthDate,
        password,
        image,
        coverImage,
        attended,
        created,
        friends,

    ) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this. eduMail = eduMail;
        this.country = country;
        this.phone = phone;
        this.birthDate = birthDate;
        this.password = password;
        this.image = image;
        this.coverImage = coverImage;
        this.attended = attended;
        this.created = created;
        this.friends = friends;

    }
}

export default User;