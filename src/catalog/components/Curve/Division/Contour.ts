import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Contour extends ResthopperComponent {

	public guid: string = "88cff285-7f5e-41b3-96d5-9588ff9a52b1";
	public name: string = "Contour";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Create a set of Curve contours";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}