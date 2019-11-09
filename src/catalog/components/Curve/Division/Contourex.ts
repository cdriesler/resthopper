import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Contourex extends ResthopperComponent {

	public guid: string = "3e7e4827-6edd-4e10-93ac-cc234414d2b9";
	public name: string = "Contour (ex)";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Create a set of Curve contours";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}