import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ScalarDisplay extends ResthopperComponent {

	public guid: string = "55f9ce6a-490c-4f25-a536-a3d47b794752";
	public name: string = "Scalar Display";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the scalar values of a field section";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}