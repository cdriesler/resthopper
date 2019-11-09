import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class UnitVector extends ResthopperComponent {

	public guid: string = "d2da1306-259a-4994-85a4-672d8a4c7805";
	public name: string = "Unit Vector";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unitize vector.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}