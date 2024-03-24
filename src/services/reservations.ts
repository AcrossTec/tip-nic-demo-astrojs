import type { IReservation, Reservations } from "../types/entities.ts";

let ReservationList: Reservations = []

export function getReservations(): Reservations {
	return ReservationList;
}

export function insertReservation(reservation: IReservation) {
	// eslint-disable-next-line no-param-reassign
	reservation.reservationId = `RESV-0${ReservationList.length + 1}`;
	
	ReservationList.push(reservation);
}

export function deleteReservation(reservationId: string) {
	ReservationList = ReservationList.filter((reservation) => reservation.reservationId !== reservationId);
}

export function updateReservation(reservation: IReservation) {
	ReservationList = ReservationList.map((r) => r.reservationId === reservation.reservationId ? reservation : r);
}
