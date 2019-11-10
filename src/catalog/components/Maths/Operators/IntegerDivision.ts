import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IntegerDivision extends ResthopperComponent {

	public guid: string = "54db2568-3441-4ae2-bcef-92c4cc608e11";
	public name: string = "Integer Division";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical integer division";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}