import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitwithBrep extends ResthopperComponent {

	public guid: string = "4bdc2eb0-24ed-4c90-a27b-a32db069eaef";
	public name: string = "Split with Brep";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Split a curve with a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}