import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MakeTwoDPerspectiveView extends ResthopperComponent {

	public guid: string = "33359c6d-984e-42f3-a869-0c3364ab33b6";
	public name: string = "Make2D Perspective View";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Define a perspective view for a Make2D solution";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}