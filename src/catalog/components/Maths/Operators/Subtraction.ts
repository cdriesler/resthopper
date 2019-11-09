import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Subtraction extends ResthopperComponent {

	public guid: string = "9c007a04-d0d9-48e4-9da3-9ba142bc4d46";
	public name: string = "Subtraction";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical subtraction";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}