import After from "../models/after";
import Before from "../models/before";
import Event from "../models/event";
import User from "../models/user";

export const BEFORES = [
    new Before(
        1,
        'Wine Tasting',
        'https://images.unsplash.com/photo-1602471615287-d733c59b79c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
        'cameronhytt'
    ),
    new Before(
        2,
        'Bicycle Team',
        'https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
        'sarah.brown'
    ),
    new Before(
        3,
        'Game Night',
        'https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
        'fernando_diegoo'
    ),
    new Before(
        4,
        'Ceramic Workshop',
        'https://images.unsplash.com/photo-1725500760837-410af960b788?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
        'chloee.ffm'
    ),
    new Before(
        5,
        'Horse Riding',
        'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
        "mc.brew"
    )
];

export const AFTERS = [
    new After(
        1,
        'Tracking',
        'https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1598275277521-1885382d523a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWtpbmd8ZW58MHx8MHx8fDA%3D',
        'seliindyglu'
    ),

    new After (
        2,
        'Pool Party',
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx1c2VyfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1562866470-3774249bef10?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vbCUyMHBhcnR5fGVufDB8fDB8fHww',
        'micheal.scofld',
    ),

    new After (
        3,
        'Nature Explorer',
        'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',

        'https://images.unsplash.com/photo-1525864227164-45ecff3c7151?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyYSUyMHdhbGt8ZW58MHx8MHx8fDA%3D',
        'alibay.daphne'
    ),

];

export const EVENTS = [
   
    new Event(
        1,
        'Barbeque Party',
        'https://images.unsplash.com/photo-1621276182949-185b77fa7d37?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3',
        'https://images.unsplash.com/photo-1495988840227-a5986a3be9fc?q=80&w=3644&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'defne.yzc',
        3,
        10,
        6
    ),

    new Event(
        2,
        'Football Night',
        'https://images.unsplash.com/photo-1605002713581-123e77bcf83d?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'aslan.yazıcıoglu',
        15,
        22,
        17
    ),

    new Event(
        3,
        'Sunday\'s Picnic',
        'https://images.unsplash.com/photo-1672863542525-33ce46829448?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1616109748085-7b89c0807927?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'johnrams',
        10,
        16,
        6
    ),

    new Event(
        4,
        'Tracking Morning',
        'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1624253792190-c2683d13e3a9?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'juddymoralles',
        7,
        10,
        9,
    )

];

export const USERS =[
    new User(
        1,
        'burcu.dikili',
        'Burcu',
        'Dikili',
        'deneme@gmail.com',
        '',
        'Türkiye',
        '',
        '21.12.2000',
        '123456',
        '../assets/images/defaultCoverPicture.jpg',
        '../assets/images/defaultProfilePicture.jpg',
        32,
        16,
        86
    ),

];

/* new Event(
        1,
        'Wine Tasting',
        'Join us for an evening filled with rich aromas, vibrant tastes, and great company. We look forward to sharing this exceptional experience with you.',
        '03-10-2024',
        '17.02',
        '10.10.2024',
        '20:00',
        'Kadıköy',
        10,
        4,
        'Burcu Dikili',
        '../assets/images/defaultProfilePicture.jpg',
    ),*/