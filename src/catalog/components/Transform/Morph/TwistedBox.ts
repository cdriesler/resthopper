import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TwistedBox extends ResthopperComponent {

	public guid: string = "124de0f5-65f8-4ae0-8f61-8fb066e2ba02";
	public name: string = "Twisted Box";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Create a twisted box from corner points.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}