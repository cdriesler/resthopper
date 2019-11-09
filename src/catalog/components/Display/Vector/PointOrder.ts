import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PointOrder extends ResthopperComponent {

	public guid: string = "0ad9f1ab-2204-45bb-b282-474469e2fa7b";
	public name: string = "Point Order";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Displays the order of a list of points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}