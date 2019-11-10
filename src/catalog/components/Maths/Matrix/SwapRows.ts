import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SwapRows extends ResthopperComponent {

	public guid: string = "8600a3fc-30f0-4df6-b126-aaa79ece5bfe";
	public name: string = "Swap Rows";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Swap two rows in a matrix";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}