import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ControlPointLoft extends ResthopperComponent {

	public guid: string = "5c270622-ee80-45a4-b07a-bd8ffede92a2";
	public name: string = "Control Point Loft";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a loft through curve control points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}