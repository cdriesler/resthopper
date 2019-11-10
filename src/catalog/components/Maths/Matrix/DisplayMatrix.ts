import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DisplayMatrix extends ResthopperComponent {

	public guid: string = "b6d27aa4-a61f-4d08-b76e-1105fef0e9e4";
	public name: string = "Display Matrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Display a matrix";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}