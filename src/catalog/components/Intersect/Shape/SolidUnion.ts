import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SolidUnion extends ResthopperComponent {

	public guid: string = "10434a15-da85-4281-bb64-a2b3a995b9c6";
	public name: string = "Solid Union";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid union on a set of Breps.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}