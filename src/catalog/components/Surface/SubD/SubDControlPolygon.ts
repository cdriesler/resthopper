import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SubDControlPolygon extends ResthopperComponent {

	public guid: string = "c1a57c2a-11c5-4f77-851e-0a7dffef848e";
	public name: string = "Sub-D Control Polygon";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract the control polygon from a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}