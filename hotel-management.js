const Room = function (number, price, capacity) {
  this.number = number;
  this.price = price;
  this.capacity = capacity;
  this.booked = false;
};

Room.prototype.info = function () {
  console.log(
    `Room ${this.number} : \n
    Capacity: ${this.capacity} person \n 
    Price : ${this.price}pkr \n 
    Booked:${this.booked} `
  );
};

Room.prototype.book = function () {
  if (this.booked) {
    console.log(
      `Room ${this.number} is already booked, please book any other room.`
    );
    return false;
  }
  this.booked = true;
  console.log(`Room ${this.number} has been booked.`);
  return true;
};

Room.prototype.checkout = function () {
  if (!this.booked) {
    console.log(`Room ${this.number} is vacant.`);
    return false;
  }
  this.booked = false;
  console.log(`Room ${this.number} has been checked out.`);
};

Room.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
  console.log(`Room ${this.number} price has changed to ${this.price} .`);
};

Room.prototype.changeCapacity = function (capacity) {
  this.capacity = capacity;
  console.log(`Room ${this.number} capacity has changed to ${this.capacity} .`);
};

// const room1 = new Room(1,400,2)
// const room2 = new Room(2,500,3)
// const room3 = new Room(3,200,1)
// room1.info()
// room1.book()
// room1.changeCapacity(4)
// room1.changePrice(600)
// room2.info()

const hotel = {
  name: "Regent Plaza",
  rooms: [new Room(1, 400, 2), new Room(2, 500, 3), new Room(3, 200, 1)],
  info() {
    this.rooms.forEach((el) => el.info());
  },
  book(person) {
    var roomFound = false;
    for (let i = 0; i < this.rooms.length; i++) {
      if (!this.rooms[i].booked) {
        roomFound = true;
        if (this.rooms[i].capacity == person) {
          this.rooms[i].book();
          return;
        }
      }
    }
    if (roomFound) {
      console.log("No room with this query");
    } else {
      console.log("All rooms are booked");
    }
  },
  checkOut(roomNumber) {
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].number == roomNumber) {
        this.rooms[i].checkout();
        return;
      }
    }
    console.log("Incorrect Room Number");
  },
  availableRoomsInfo() {
    let roomFound = false;
    for (let i = 0; i < this.rooms.length; i++) {
      if (!this.rooms[i].booked) {
        roomFound = true;
        console.log(this.rooms[i].info());
      }
    }
    if (!roomFound) console.log("All rooms are booked");
  },
};
hotel.book(2);
hotel.book(1);
hotel.book(5);
hotel.book(3);
hotel.availableRoomsInfo();
hotel.info();
