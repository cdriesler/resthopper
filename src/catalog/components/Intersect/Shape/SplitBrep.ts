import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SplitBrep extends ResthopperComponent {

	public guid: string = "ef6b26f4-f820-48d6-b0c5-85898ef8888b";
	public name: string = "Split Brep";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Split one brep with another.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}