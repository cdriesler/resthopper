import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CollisionManyMany extends ResthopperComponent {

	public guid: string = "2168853c-acd8-4a63-9c9b-ecde9e239eae";
	public name: string = "Collision Many|Many";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Test for many|many collision between objects";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}