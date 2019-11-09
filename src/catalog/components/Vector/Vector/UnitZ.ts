import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class UnitZ extends ResthopperComponent {

	public guid: string = "9103c240-a6a9-4223-9b42-dbd19bf38e2b";
	public name: string = "Unit Z";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unit vector parallel to the world {z} axis.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}