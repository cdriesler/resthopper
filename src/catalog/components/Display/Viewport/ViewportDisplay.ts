import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ViewportDisplay extends ResthopperComponent {

	public guid: string = "b78d95bc-dffb-414c-b177-c611c92580b9";
	public name: string = "Viewport Display";
	public category: string = "Display";
	public subCategory: string = "Viewport";
	public description: string = "Display viewport on canvas";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}