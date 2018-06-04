function restHouse(roomsArr, guestsArr) {
    let rooms = extractRooms(roomsArr);
    let teaHouseMembers = 0;

    for (let guests of guestsArr) {
        let roomFound = false;
        if (guests.first.gender !== guests.second.gender) {
            for (let number in rooms) {
                if (rooms[number]["type"] === "double-bedded" && rooms[number]["emptyBeds"] === 2) {
                    let firstG = JSON.stringify(guests.first);
                    let secondG = JSON.stringify(guests.second);
                    rooms[number]["guests"] = [firstG, secondG];
                    rooms[number]["emptyBeds"] = 0;
                    roomFound = true;
                    break;
                }
            }
        }
        else{
            for (let number in rooms) {
                if (rooms[number]["type"] === "triple" && rooms[number]["emptyBeds"] > 1){
                    let firstG = JSON.stringify(guests.first);
                    let secondG = JSON.stringify(guests.second);
                    rooms[number]["guests"] = [firstG, secondG];
                    rooms[number]["emptyBeds"] -= 2;
                }
                else if (rooms[number]["type"] === "triple" && rooms[number]["emptyBeds"] === 1){
                    let tempObj = JSON.parse(rooms[number]["guests"][0]);
                    if (guests["first"]["gender"] === tempObj["gender"]){
                        let firstG = JSON.stringify(guests.first);
                        rooms[number]["guests"].push(firstG);
                        rooms[number]["emptyBeds"]--;
                        teaHouseMembers++;
                    }
                    else if (guests["second"]["gender"] === tempObj["gender"]){
                        let secondG = JSON.stringify(guests.first);
                        rooms[number]["guests"].push(secondG);
                        rooms[number]["emptyBeds"]--;
                        teaHouseMembers++;
                    }
                }
            }
        }

    }
    let keys = Object.keys(rooms).sort();
    for (let number of keys) {
        console.log(`Room number: ${number}`)

    }


    function extractRooms(roomsArr) {
        let rooms = {};
        for (let room of roomsArr) {
            rooms[room.number] = {};
            rooms[room.number]["type"] = room.type;
            if (room.type === "triple") {
                rooms[room.number]["emptyBeds"] = 3;
            }
            else {
                rooms[room.number]["emptyBeds"] = 2;
            }
        }
        return rooms;
    }

}

restHouse([ { number: '206', type: 'double-bedded' },
        { number: '311', type: 'triple' } ],
    [ { first: { name: 'Tanya Popova', gender: 'female', age: 24 },
        second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 } },
        { first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
            second: { name: 'Angel Nachev', gender: 'male', age: 22 } },
        { first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
            second: { name: 'Boryana Baeva', gender: 'female', age: 22 } } ]
)