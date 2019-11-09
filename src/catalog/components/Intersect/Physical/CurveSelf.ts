import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CurveSelf extends ResthopperComponent {

	public guid: string = "0991ac99-6a0b-47a9-b07d-dd510ca57f0f";
	public name: string = "Curve | Self";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve all self intersection events for a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}