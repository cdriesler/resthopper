import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CircleCNR extends ResthopperComponent {

	public guid: string = "d114323a-e6ee-4164-946b-e4ca0ce15efa";
	public name: string = "Circle CNR";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle defined by center, normal and radius.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}