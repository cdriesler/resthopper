import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SwapColumns extends ResthopperComponent {

	public guid: string = "4cebcaf7-9a6a-435b-8f8f-95a62bacb0f2";
	public name: string = "Swap Columns";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Swap two columns in a matrix";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}