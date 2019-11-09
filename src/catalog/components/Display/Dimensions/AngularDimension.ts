import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class AngularDimension extends ResthopperComponent {

	public guid: string = "fc6b519e-df6d-4ce1-a1f4-083f1c217c14";
	public name: string = "Angular Dimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create an angle annotation between points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}