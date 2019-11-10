import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Closed extends ResthopperComponent {

	public guid: string = "323f3245-af49-4489-8677-7a2c73664077";
	public name: string = "Closed";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test if a curve is closed or periodic.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}