/* En este desafío deberás crear un sistema de administración para un hotel.

El objetivo de este ejercicio es utilizar closures para implementar la lógica de una función (hotelSystem) que administre un hotel. La función recibirá un parámetro rooms, definirá el número total de habitaciones.

El closure debe retornar las siguientes funciones:

searchReservation(id): esta función permitirá buscar una reservación por su ID. En caso de no encontrarla, se retornará un error con el mensaje "La reservación no fue encontrada".

getSortReservations(): esta función nos devolverá una copia de las reservaciones sin modificar el array original ordenando las reservaciones por fecha de check-in de manera ascendente.

addReservation(reservation): esta función se usará para agregar una nueva reservación. Debe asegurarse de que la habitación solicitada esté disponible para las fechas de check-in y check-out. En caso de que esté reservada, se retornará un error con el mensaje "La habitación no está disponible".

removeReservation(id): esta función eliminará la reservación correspondiente al ID recibido y la retornará. En caso de que la reservación no exista, se retornará un error con el mensaje "La reservación que se busca remover no existe".

getReservations(): esta función nos devolverá todas las reservaciones.

getAvailableRooms(checkIn, checkOut): esta función recibirá dos parámetros, checkIn y checkOut con formato "dd/mm". La función debe devolver las habitaciones disponibles para las fechas dadas.

El formato que recibirás para las reservaciones será el siguiente:

- id: un identificador único
- name: El nombre de quien agenda
- checkIn: Fecha de llegada
- checkOut: Fecha de salida
- roomNumber: La habitación solicitada */

function hotelSystem(rooms) {
    const reservations = [];
    return {
        searchReservation(id) {
            const reservation = reservations.find(reserv => reserv.id === id);
            if(!reservation) {
                return "La reservación no fue encontrada"
            }
            return reservation;
        },
        getSortReservation() {
            // esta función nos devolverá una copia de las reservaciones sin modificar el array original ordenando las reservaciones por fecha de check-in de manera ascendente.
            let copyReservations = [...reservations];
            return copyReservations.sort((a, b) => {
                const checkInA = new Date(a.checkIn);
                const checkInB = new Date(b.checkIn);
                return checkInA - checkInB;
            });
        },
        addReservation(reservation) {
            const newCheckIn = new Date(reservation.checkIn);
            const newCheckOut = new Date(reservation.checkOut);

            const isReserved = reservations.findIndex((reserv) => {
                const prevCheckIn = new Date(reserv.checkIn);
                const prevCheckOut = new Date(reserv.checkOut);

                return reserv.roomNumber === reservation.roomNumber && (newCheckIn < prevCheckOut && newCheckOut > prevCheckIn)
            });

            if(isReserved !== -1) {
                throw new Error("La habitacion no esta disponible");
            }

            reservations.push(reservation);
            return "Reservacion exitosa"

        },
        removeReservation(id) {
            // esta función eliminará la reservación correspondiente al ID recibido y la retornará. En caso de que la reservación no exista, se retornará un error con el mensaje "La reservación que se busca remover no existe".
            const reservation = reservations.find(reserv => reserv.id === id);
            if(!reservation) {
                return "La reservación que se busca remover no existe"
            }
            const index = reservations.findIndex(reserv => reserv.id === id);
            if(index !== -1) {
                const remove = reservations.splice(index, 1);
                return remove;
            }
        },
        getreservation() {
            // esta función nos devolverá todas las reservaciones.
            return list;
        },
        getAvailableRooms(checkIn, checkOut) {
            //  esta función recibirá dos parámetros, checkIn y checkOut con formato "dd/mm". La función debe devolver las habitaciones disponibles para las fechas dadas.
            const dateCheckIn = new Date(checkIn);
            const dateCheckOut = new Date(checkOut);
            const availableRooms = Array.from({
                length: rooms
            }, (_, i) => i + 1);

            reservations.forEach((reserv) => {
                const prevCheckIn = new Date(reserv.checkIn);
                const prevCheckOut = new Date(reserv.checkOut);

                if(dateCheckIn <= prevCheckOut && dateCheckOut >= prevCheckIn) {
                    const index = availableRooms.indexOf(reserv.roomNumber);
                    if(index !== -1) {
                        availableRooms.splice(index, 1);
                    }
                }
            });
            return availableRooms;
        }
    }
}  


// Input
const hotel = hotelSystem(10);

// Agregar una nueva reservación
hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.getReservations();

/*
Output:
[
  {
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
  }
]
*/

// Input
const hotel1 = hotelSystem(10);

hotel1.addReservation({
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
  });

hotel1.addReservation({
id: 2,
name: "Pepe Doe",
checkIn: "01/01",
checkOut: "02/01",
roomNumber: 7,
});


// Buscar una resevación hecha
hotel1.searchReservation(2);

/*
Output:
{
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
}
*/

// Input
const hotel2 = hotelSystem(10);

hotel2.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel2.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});

// Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
hotel2.getAvailableRooms("01/01", "05/01")

/*
Output:

[2, 3, 4, 5, 6, 7, 8, 10]
*/
