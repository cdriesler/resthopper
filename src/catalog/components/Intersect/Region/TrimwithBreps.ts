import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithBreps extends ResthopperComponent {

	public guid: string = "916e7ebc-524c-47ce-8936-e50a09a7b43c";
	public name: string = "Trim with Breps";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with multiple Breps.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}