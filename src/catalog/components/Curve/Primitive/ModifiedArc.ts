import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ModifiedArc extends ResthopperComponent {

	public guid: string = "9d8dec9c-3fd1-481c-9c3d-75ea5e15eb1a";
	public name: string = "Modified Arc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc based on another arc.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}