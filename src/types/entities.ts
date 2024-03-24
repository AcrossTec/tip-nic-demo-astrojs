export type Reservations = IReservation[];

export type IReservation =
{
	reservationId: string
	name: string;	
	payment: string;
	commission: string;
	customerServices: string;
	date: string;
	pax: string;
	observations: string;
	tour: string;
	time: string;
	withGuide: boolean;
}
