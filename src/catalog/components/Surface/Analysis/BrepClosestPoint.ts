import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BrepClosestPoint extends ResthopperComponent {

	public guid: string = "4beead95-8aa2-4613-8bb9-24758a0f5c4c";
	public name: string = "Brep Closest Point";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Find the closest point on a brep";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}