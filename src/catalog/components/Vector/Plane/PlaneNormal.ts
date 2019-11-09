import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneNormal extends ResthopperComponent {

	public guid: string = "cfb6b17f-ca82-4f5d-b604-d4f69f569de3";
	public name: string = "Plane Normal";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane perpendicular to a vector.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}