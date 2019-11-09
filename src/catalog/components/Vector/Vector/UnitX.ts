import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class UnitX extends ResthopperComponent {

	public guid: string = "79f9fbb3-8f1d-4d9a-88a9-f7961b1012cd";
	public name: string = "Unit X";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unit vector parallel to the world {x} axis.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}