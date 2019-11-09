import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Shear extends ResthopperComponent {

	public guid: string = "5a27203a-e05f-4eea-b80f-a5f29a00fdf2";
	public name: string = "Shear";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Shear an object based on a shearing vector.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}