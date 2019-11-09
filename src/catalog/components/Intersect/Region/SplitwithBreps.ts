import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SplitwithBreps extends ResthopperComponent {

	public guid: string = "5b742537-9bcb-4f06-9613-866da5bf845e";
	public name: string = "Split with Breps";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Split a curve with multiple Breps.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}