import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Factorial extends ResthopperComponent {

	public guid: string = "a0a38131-c5fc-4984-b05d-34cf57f0c018";
	public name: string = "Factorial";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Returns the factorial of an integer.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}