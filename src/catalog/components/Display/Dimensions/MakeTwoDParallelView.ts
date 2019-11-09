import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MakeTwoDParallelView extends ResthopperComponent {

	public guid: string = "3fc08088-d75d-43bc-83cc-7a654f156cb7";
	public name: string = "Make2D Parallel View";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Define a parallel view for a Make2D solution";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}