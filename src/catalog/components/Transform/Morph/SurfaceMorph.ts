import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfaceMorph extends ResthopperComponent {

	public guid: string = "5889b68f-fd88-4032-860f-869fb69654dd";
	public name: string = "Surface Morph";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Morph geometry into surface UVW coordinates";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}