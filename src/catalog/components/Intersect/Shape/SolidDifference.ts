import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SolidDifference extends ResthopperComponent {

	public guid: string = "fab11c30-2d9c-4d15-ab3c-2289f1ae5c21";
	public name: string = "Solid Difference";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid difference on two Brep sets.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}