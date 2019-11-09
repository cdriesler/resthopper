import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CullDuplicates extends ResthopperComponent {

	public guid: string = "6eaffbb2-3392-441a-8556-2dc126aa8910";
	public name: string = "Cull Duplicates";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Cull points that are coincident within tolerance";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}