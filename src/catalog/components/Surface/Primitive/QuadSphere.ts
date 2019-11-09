import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class QuadSphere extends ResthopperComponent {

	public guid: string = "361790d6-9d66-4808-8c5a-8de9c218c227";
	public name: string = "Quad Sphere";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a spherical brep made from quad nurbs patches.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}