import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BoundarySurfaces extends ResthopperComponent {

	public guid: string = "d51e9b65-aa4e-4fd6-976c-cef35d421d05";
	public name: string = "Boundary Surfaces";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create planar surfaces from a collection of boundary edge curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}