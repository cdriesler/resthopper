import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentArcs extends ResthopperComponent {

	public guid: string = "f1c0783b-60e9-42a7-8081-925bc755494c";
	public name: string = "Tangent Arcs";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create tangent arcs between circles";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}