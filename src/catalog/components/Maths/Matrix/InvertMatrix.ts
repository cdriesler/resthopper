import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InvertMatrix extends ResthopperComponent {

	public guid: string = "f986e79a-1215-4822-a1e7-3311dbdeb851";
	public name: string = "Invert Matrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Invert a matrix";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}