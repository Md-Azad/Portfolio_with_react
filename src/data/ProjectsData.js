const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "car_services.PNG",
        "title": "Car Service",
        "description": "Car service is a Full-Stack website with features like login, booking services, Authendication, and add to cart.",
       
    },
    {
        "id": crypto.randomUUID(),
        "cover":"javascript-logo.png",
        "title": "Marriage Story",
        "description": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
      
    },
    {
        "id": crypto.randomUUID(),
        "cover": "javascript-logo.png",
        "title": "car_service.PNG",
        "description": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        
    },
    {
        "id": crypto.randomUUID(),
        "cover": "javascript-logo.png",
        "title": "Parasite",
        "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
        
    },
    {
        "id": crypto.randomUUID(),
        "cover": "javascript-logo.png",
        "title": "Iron Man",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        
    }
]

function getAllProjects() {
    return data;
}

export { getAllProjects };