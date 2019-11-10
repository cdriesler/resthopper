import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorDisplayEx extends ResthopperComponent {

	public guid: string = "11e95a7b-1e2c-4b66-bd95-fcad51f8662a";
	public name: string = "Vector Display Ex";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Preview vectors in the viewport";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}