import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MaptoSurface extends ResthopperComponent {

	public guid: string = "fc5b7d12-7247-4de0-81bc-9b2c2f8f72f6";
	public name: string = "Map to Surface";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Map a curve onto a surface via control points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}