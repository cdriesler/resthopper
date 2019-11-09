import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RotatePlane extends ResthopperComponent {

	public guid: string = "f6f14b09-6497-4564-8403-09e4eb5a6b82";
	public name: string = "Rotate Plane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Perform plane rotation around plane z-axis";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}