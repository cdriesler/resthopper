import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DotProduct extends ResthopperComponent {

	public guid: string = "43b9ea8f-f772-40f2-9880-011a9c3cbbb0";
	public name: string = "Dot Product";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute vector dot product.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}