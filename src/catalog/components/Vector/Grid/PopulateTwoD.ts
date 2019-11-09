import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PopulateTwoD extends ResthopperComponent {

	public guid: string = "e2d958e8-9f08-44f7-bf47-a684882d0b2a";
	public name: string = "Populate 2D";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "Populate a 2-Dimensional region with points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}