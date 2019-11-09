import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FieldLine extends ResthopperComponent {

	public guid: string = "add6be3e-c57f-4740-96e4-5680abaa9169";
	public name: string = "Field Line";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Compute the field line through a certain point";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}