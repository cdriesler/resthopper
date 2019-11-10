import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PipeVariable extends ResthopperComponent {

	public guid: string = "888f9c3c-f1e1-4344-94b0-5ee6a45aee11";
	public name: string = "Pipe Variable";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a pipe surface with variable radii around a rail curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}