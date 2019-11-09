import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TransposeMatrix extends ResthopperComponent {

	public guid: string = "0e90b1f3-b870-4e09-8711-4bf819675d90";
	public name: string = "Transpose Matrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Transpose a matrix (swap rows and columns)";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}