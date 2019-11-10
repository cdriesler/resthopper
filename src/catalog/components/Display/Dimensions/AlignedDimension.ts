import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AlignedDimension extends ResthopperComponent {

	public guid: string = "3de3d3a0-1a1b-488c-b3d9-3fba0fdf07a8";
	public name: string = "Aligned Dimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation between two points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}