import type { IReservation, Reservations } from "../types/entities.ts";

export function getReservations(): Reservations
{
	const reservations = window.localStorage.getItem('reservations');
	if (reservations)
	{
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return JSON.parse(reservations);
	}
	return [];
}

export function insertReservation(reservation: IReservation)
{
	const ReservationList = getReservations();

	// Obtengo el último ID de reserva
	let maxId = Number(window.localStorage.getItem('maxReservationId')) || 0;

	// Incremento el ID
	maxId += 1;

	// Guardo el nuevo ID
	window.localStorage.setItem('maxReservationId', String(maxId));

	// Asigno el nuevo ID a la reserva
	reservation.reservationId = `RESV-0${maxId}`;

	// Agrego la nueva reserva a la lista en el localstorage del navegador
	ReservationList.push(reservation);
	const jsonString = JSON.stringify(ReservationList);

	window.localStorage.setItem('reservations', jsonString);
}

export function deleteReservation(reservationId: string)
{
	// obtengo las reservas del localStorage
	let reservations = getReservations();

	// filtro las reservas para eliminar la que tiene el id proporcionado
	reservations = reservations.filter(reservation => reservation.reservationId !== reservationId);

	// guardo las reservas actualizadas en el localStorage
	window.localStorage.setItem('reservations', JSON.stringify(reservations));
}

export function updateReservation(reservationId: string, updatedReservation: IReservation)
{
	// obtengo las reservas del localStorage
	const reservations = getReservations();

	// busco el índice de la reserva que quiero actualizar
	let index = reservations.findIndex(reservation => reservation.reservationId === reservationId);

	// si la reserva existe, la actualizo
	if (index !== -1) {
			// mantengo el mismo reservationId
			updatedReservation.reservationId = reservationId;
			reservations[index] = updatedReservation;

			// guardo las reservas actualizadas en el localStorage
			window.localStorage.setItem('reservations', JSON.stringify(reservations));
	} else {
			console.error(`Reservation with ID ${reservationId} not found.`);
	}
}
