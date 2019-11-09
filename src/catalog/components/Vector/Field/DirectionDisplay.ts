import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DirectionDisplay extends ResthopperComponent {

	public guid: string = "5ba20fab-6d71-48ea-a98f-cb034db6bbdc";
	public name: string = "Direction Display";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the force directions of a field section";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}