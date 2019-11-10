import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepLine extends ResthopperComponent {

	public guid: string = "ed0742f9-6647-4d95-9dfd-9ad17080ae9c";
	public name: string = "Brep | Line";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a Brep and a line.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}