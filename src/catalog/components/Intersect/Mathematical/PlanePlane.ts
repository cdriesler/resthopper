import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlanePlane extends ResthopperComponent {

	public guid: string = "290cf9c4-0711-4704-851e-4c99e3343ac5";
	public name: string = "Plane | Plane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve the intersection event of two planes.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}