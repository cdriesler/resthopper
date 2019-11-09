import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CollisionOneMany extends ResthopperComponent {

	public guid: string = "bb6c6501-0500-4678-859b-b838348981d1";
	public name: string = "Collision One|Many";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Test for one|many collision between objects";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}