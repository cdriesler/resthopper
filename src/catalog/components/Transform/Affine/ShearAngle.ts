import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ShearAngle extends ResthopperComponent {

	public guid: string = "f19ee36c-f21f-4e25-be4c-4ca4b30eda0d";
	public name: string = "Shear Angle";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Shear an object based on tilt angles.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}