import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Division extends ResthopperComponent {

	public guid: string = "9c85271f-89fa-4e9f-9f4a-d75802120ccc";
	public name: string = "Division";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical division";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}