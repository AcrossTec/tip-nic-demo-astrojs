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

	// eslint-disable-next-line no-param-reassign
	reservation.reservationId = `RESV-0${ReservationList.length + 1}`;

	// save in the localstorage browser
	ReservationList.push(reservation);
	const jsonString = JSON.stringify(ReservationList);

	window.localStorage.setItem('reservations', jsonString);
}

export function deleteReservation(reservationId: string)
{
	let ReservationList = getReservations();
	ReservationList = ReservationList.filter((r) => r.reservationId !== reservationId);
	const jsonString = JSON.stringify(ReservationList);
	window.localStorage.setItem('reservations', jsonString);
}

export function updateReservation(reservation: IReservation)
{
	let ReservationList = getReservations();
	ReservationList = ReservationList.map((r) => (r.reservationId === reservation.reservationId ? reservation : r));
	const jsonString = JSON.stringify(ReservationList);
	window.localStorage.setItem('reservations', jsonString);
}
