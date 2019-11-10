import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MultipleCurves extends ResthopperComponent {

	public guid: string = "931e6030-ccb3-4a7b-a89a-99dcce8770cd";
	public name: string = "Multiple Curves";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for multiple curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}