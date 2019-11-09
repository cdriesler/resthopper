import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Square extends ResthopperComponent {

	public guid: string = "717a1e25-a075-4530-bc80-d43ecc2500d9";
	public name: string = "Square";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with square cells";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}