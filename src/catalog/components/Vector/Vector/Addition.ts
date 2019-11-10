import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Addition extends ResthopperComponent {

	public guid: string = "fb012ef9-4734-4049-84a0-b92b85bb09da";
	public name: string = "Addition";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Perform vector-vector addition.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}