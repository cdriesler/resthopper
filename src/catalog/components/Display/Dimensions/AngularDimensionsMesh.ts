import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class AngularDimensionsMesh extends ResthopperComponent {

	public guid: string = "91f3bde5-26e6-432e-a5fe-a2938b2a94f9";
	public name: string = "Angular Dimensions (Mesh)";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create angle annotations for all mesh corners.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}