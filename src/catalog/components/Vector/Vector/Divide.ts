import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Divide extends ResthopperComponent {

	public guid: string = "310e1065-d03a-4858-bcd1-809d39c042af";
	public name: string = "Divide";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Perform vector-scalar division.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}